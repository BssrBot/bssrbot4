import { Respond } from './bssrBotFunctions/messageResponse.js';
import { isDinoMeal } from './bssrBotFunctions/getDino.js';
import { addImageDino, getRandomImage, removeSpecificImage} from './bssrBotFunctions/images.js';
import { addCoffeeNightPic, getCoffeeNightPics, COFFEE_NIGHT, clearCoffeeNightPics } from './bssrBotFunctions/getCoffeeNight.js'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Use dotenv to read .env vars into Node
require('dotenv').config();
// Imports dependencies and set up http server
const
  request = require('request'),
  express = require('express'),
  { urlencoded, json } = require('body-parser'),
  app = express();

// Parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// Parse application/json
app.use(json());

// Respond with 'Hello World' when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Hello World');
});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

// Creates the endpoint for your webhook
app.post('/webhook', (req, res) => {
  let body = req.body;
  //Runs the clear coffee night pics command, checks if its 10pm on Wednesday
  clearCoffeeNightPics();

  // Checks if this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhookEvent = entry.messaging[0];
      console.log(webhookEvent);

      // Get the sender PSID
      let senderPsid = webhookEvent.sender.id;
      console.log('Sender PSID: ' + senderPsid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhookEvent.message) {
        handleMessage(senderPsid, webhookEvent.message);
      } else if (webhookEvent.postback) {
        handlePostback(senderPsid, webhookEvent.postback);
      }
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {

    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

// Handles messages events
function handleMessage(senderPsid, receivedMessage) {
  let response;
  

  // Checks if the message contains text
  if (receivedMessage.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of your request to the Send API

    response = Respond(senderPsid, receivedMessage.text);
  } else if (receivedMessage.attachments) {

    // Get the URL of the message attachment
    let attachmentUrl = receivedMessage.attachments[0].payload.url;
    response = {
      'attachment': {
        'type': 'template',
        'payload': {
          'template_type': 'generic',
          'elements': [{
            'title': 'Add to Dino?',
            'subtitle': 'Tap a button to answer.',
            'image_url': attachmentUrl,
            //Payload contains attachment URL for adding/deleting
            'buttons': [
              {
                'type': 'postback',
                'title': 'Dino',
                'payload': attachmentUrl,
              },
              {
                'type': 'postback',
                'title': 'Delete from Dino',
                'payload': attachmentUrl,
              },
            ],
          }]
        }
      }
    };
  }

  // Send the response message
  callSendAPI(senderPsid, response);
  //If a dino meal, send a random picture sent in by a user
  if (attachDinoImage(receivedMessage)) {
    const imageResponse = getRandomImage();
    callSendAPI(senderPsid, imageResponse);
  //Send coffee night pics to Laurence
  }
}

// Attach Image to dino
function attachDinoImage(receivedMessage) {
  if (receivedMessage.text && isDinoMeal(receivedMessage.text.toLowerCase().replace(/\W/g, ''))) {
    return true;
  } else {
    return false;
  }
}

// Send all Coffee Night Pics
function sendCoffeeNightPics(senderPsid, urls) {
  for (const url of urls) {
    callSendAPI(senderPsid, { 
      'attachment': {
        'type':'image', 
        'payload':{
          'url': url,
          'is_reusable': true
        }
      }
    });
  }
}

// Handles messaging_postbacks events
function handlePostback(senderPsid, receivedPostback) {
  let response;

  // Get the payload for the postback
  let title = receivedPostback.title;

  // If button pressed is dino, add image to dino(contained in postback payload)
  if (title === 'Dino') {
    response = { 'text': 'Adding image to dino...'}
    addImageDino(receivedPostback.payload);
  }
  // If button pressed delete from dino, removes specific image that the user added so it won't appear in dino anymore
  else if (title === 'Delete from Dino') {

    response = removeSpecificImage(receivedPostback.payload)
  }
  // Send the message to acknowledge the postback
  callSendAPI(senderPsid, response);
}

// Adds Quick Reply Bubbles  
function addQuickReply(response) {
  response['quick_replies'] = [
    {
      "content_type":"text",
      "title":"Breakfast",
      "payload":"Breakfast",
    },
    {
      "content_type":"text",
      "title":"Lunch",
      "payload":"Lunch",
    },
    {
      "content_type":"text",
      "title":"Dinner",
      "payload":"Dinner",
    },
    {
      "content_type":"text",
      "title":"Laundry",
      "payload":"Laundry",
    }
  ]
  return response;
}

// Sends response messages via the Send API
export function callSendAPI(senderPsid, response) {
  response = addQuickReply(response);
  // The page access token we have generated in your app settings
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  // Construct the message body
  
  let requestBody = {
    'recipient': {
      'id': senderPsid
    },
    'message': response
  };

  // Send the HTTP request to the Messenger Platform
  request({
    'uri': 'https://graph.facebook.com/v2.6/me/messages',
    'qs': { 'access_token': PAGE_ACCESS_TOKEN },
    'method': 'POST',
    'json': requestBody
  }, (err, _res, _body) => {
    if (!err) {
      console.log('Message sent!');
    } else {
      console.error('Unable to send message:' + err);
    }
  });
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
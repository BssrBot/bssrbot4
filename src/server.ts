import express, { json, Request, Response } from 'express';

import config from './config.json';
import dotenv from 'dotenv';
dotenv.config();
const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || 'localhost';

const fs = require('fs');
const app = express();

// Example get request
app.get('/', (req: Request, res: Response) => {
	return res.send('Hello World');
});

app.post("/webhook", (req: Request, res: Response) => {
  let body = req.body;

  console.log(`\u{1F7EA} Received webhook:`);
  console.dir(body, { depth: null });
  
  // Send a 200 OK response if this is a page webhook
  if (body.object === "page") {
    
    //Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array , but 
      // will only ever contain one message, so we get index 0
      console.log(entry.messaging[0]);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
    // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
}); 

// Add support for GET requests to our webhook
app.get("/webhook", (req: Request, res: Response) => {
  
  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === config.verifyToken) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

// start server
const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server listening on port ${PORT} at ${HOST}`);
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('\nShutting down server gracefully.'));
});

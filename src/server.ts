import express, { json, Request, Response } from 'express';
import config from './config.json';
const fs = require('fs');
const pdf = require('pdf-parse');

const app = express();
const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || 'localhost';

// Example get request
app.get('/', (req: Request, res: Response, next) => {
  let dataBuffer = fs.readFileSync('./menu.pdf');

	pdf(dataBuffer).then(function(data) {
		console.log(data.text);
	});
	
	return res.send('Hello World');
});


// start server
const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server listening on port ${PORT} at ${HOST}`);
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log(' Shutting down server gracefully.'));
});

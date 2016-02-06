var express = require('express');
var twilio = require('twilio');

// Account SID and auth token are stored in environment variables.
var app = express();


app.get('/', function(req, res) {
  res.send("Hello World!");
})

app.post('/voice', function(req, res) {
  console.log('Call received.');

  // Set the url of the song we are going to play
  var songUrl = 'https://s3.amazonaws.com/scheerhackfsu/rickastley_artists.mp3'

  // Generate a TwiML response
  var twiml = new twilio.TwimlResponse();

  // Set the response type as XML.
  res.header('Content-Type', 'text/xml');

  // Play Guile's theme over the phone.
  twiml.play(songUrl);

  // Send the TwiML as the response.
  res.send(twiml.toString());
});

// Make our Express server listen on port 3000.
app.listen(8888, () => console.log('Listening at http://localhost:8888'));

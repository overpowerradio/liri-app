var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'CjDeGWUzMERwzwqHDjtZwQSVB',
  consumer_secret: 'l6T0vLPI76h0LthLtfPK5g4roQGTlMZTYXUFjuwc93Lmr7Vwq8',
  access_token_key: '885383032177397760-ukKKmMGhGM1mcMdjmzGPOJGKS0fRAwG',
  access_token_secret: 'MXMs2SEjRZfrQKJ4hcgq3kovADjBpbpeiSZG8mKx33eth'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
	console.log("Where's the Tweets?");
  }
});

//********************************************************************

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: '4167836633ed463b9b49fa57085f49da',
//   secret: 'fae01f2aef6a475790ff88bb6b552613'
// });
 
// spotify.search({ type: 'track', query: 'I Want It That Way' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
// console.log("Spotify is logging");
// console.log(JSON.stringify(data, null, 2)); 
// });
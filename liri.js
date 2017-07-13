var command = process.argv[2];

var nodeArgvs = process.argv;

for (var i = 3; i < nodeArgvs.length; i++);

var userInput = "";

var keys = require('./keys.js');
var Twitter = require('twitter');

 
var client = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'iamcurtishayes'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets.id);
	console.log("Where's the Tweets?");
  }
});

//********************************************************************

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'I Want It That Way' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log("Spotify is logging");
console.log(data.tracks); 
});

if (command === "my-tweets") {
  outputNum = parseFloat(num1) + parseFloat(num2);
}

else if (command === "spotify-this-song") {
  outputNum = parseFloat(num1) - parseFloat(num2);
}

else if (command === "movie-this") {
  outputNum = parseFloat(num1) * parseFloat(num2);
}

else if (command === "do-what-it-says") {
  outputNum = parseFloat(num1) / parseFloat(num2);
}else {
  
}

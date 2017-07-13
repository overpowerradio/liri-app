var command = process.argv[2];

var nodeArgvs = process.argv;
var userInput = "";

for (var i = 3; i < nodeArgvs.length; i++) {

  //going to add the code to create the string (userInput) for the spotify and other queries.
}



var keys = require('./keys.js');
var Twitter = require('twitter');

 
function twitterFeed () {

var client = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'iamcurtishayes'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    for (var i = 0; i < tweets.length; i++){

    console.log(tweets[i]['created_at']);
    console.log(tweets[i]['text']);
    
    }
    
  }
});
}
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

function controller() {
  switch(command){
    case "my-tweets":
    twitterFeed();

  }

}

controller();
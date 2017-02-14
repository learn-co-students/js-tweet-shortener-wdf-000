'use strict';

var substitute = {
	"hello" : 'hi',
	"to" : '2',
	"two" : '2',
	"too" : '2',
	"for" : '4',
	"four" :'4',
	'be' : 'b',
	'you' : 'u',
	"at" : "@",
	"and" : "&"
	};

var tweetShortener = {
  	wordSubstituter: function(tweet){
  		var x = tweet.split(" ");
  		for (var i in x){
  			if(substitute[x[i].toLowerCase()]){
  				x[i] = substitute[x[i].toLowerCase()];
  			}
  		}
  		return x.join(" ");
  	},

  	bulkShortener: function(tweets){
  		return tweets.map(tweet=>{
  			return this.wordSubstituter(tweet);
  		})
  	},

  	selectiveShortener: function(tweet){
  		if (tweet.length > 140){
  			tweet = this.wordSubstituter(tweet);
  			}
  			return tweet;
  	},

  	shortenedTruncator: function(tweet){
  		var shortened = this.selectiveShortener(tweet);
  		if(shortened.length > 140){
  			shortened = shortened.slice(0, 137) + "..."
  			return shortened;
  			}
  			return shortened;
  		}
};

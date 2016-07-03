'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){

  var dict = {
    'hello' : 'hi',
    'to' : '2',
    'two': '2',
    'too' : '2',
    'for': '4',
    'four': '4',
    'be': 'b',
    'you': 'u',
    'at': '@',
    'and': "&"
  }

    return tweet.split(/\s+/).map((v,i) => dict[v.toLowerCase()] ? dict[v.toLowerCase()] : v).join(' ');
  },

  bulkShortener: function(tweets){
    return tweets.map((v,i) => this.wordSubstituter(v));
  },

  selectiveShortener: function(tweet){
    return tweet.length > 140 ? this.wordSubstituter(tweet) : tweet;
  },

  shortenedTruncator: function(tweet){
    var shortened = this.selectiveShortener(tweet);
    return shortened.length > 140 ? shortened.substr(0,137) + '...' : shortened; 
  }
};

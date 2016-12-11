'use strict';

var shorten = {
  "hello" : 'hi',
  "to" :'2',
  "two" :'2',
  "too" :'2',
  "for" : '4',
  "four" : '4',
  'be' : 'b',
  'you' : 'u',
  "at" : "@",
  "and" : "&"
}

var tweetShortener = {

  wordSubstituter: function(tweet) {
    var words = tweet.split(" ")
    for (var i in words) {
      if(shorten[words[i].toLowerCase()]){
        words[i] = shorten[words[i].toLowerCase()];
      }
    }
    return words.join(" ")
  },
  bulkShortener: function(tweets) {
    var shortened = [];
    for (var i in tweets) {
      shortened.push( this.wordSubstituter(tweets[i]) )
    }
    return shortened;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      var shorter_tweet = this.wordSubstituter(tweet);
      return (shorter_tweet.length > 140) ? this.shortenedTruncator(shorter_tweet) : shorter_tweet
    }
    return tweet;
  },

  shortenedTruncator: function(tweet){
    return (tweet.length > 140) ? this.wordSubstituter(tweet).slice(0, 137) + "..." : tweet
  }

};

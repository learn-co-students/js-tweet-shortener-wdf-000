'use strict';

var short = {
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
    var t = tweet.split(" ")
    for (var i in t) {
      if(short[t[i].toLowerCase()]){
        t[i] = short[t[i].toLowerCase()];
      }
    }
    return t.join(" ")
  },
  bulkShortener: function(tweets) {
    var shortArr = [];
    for (var i in tweets) {
      shortArr.push( this.wordSubstituter(tweets[i]) )
    }
    return shortArr;
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

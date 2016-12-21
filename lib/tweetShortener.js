'use strict';
var substitute = {
  "hello" : 'hi',
  "to" : '2',
  "two" : '2',
  "too" : '2',
  "for" : '4',
  "four" : '4',
  'be' : 'b',
  'you' : 'u',
  "at" : "@",
  "and" : "&",
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var temp = tweet.split(" ");
    for (var i = 0; i < temp.length; i++) {
      if (substitute[temp[i].toLowerCase()]) {
        temp[i] = substitute[temp[i].toLowerCase()];
      }
    }
    return temp.join(" ");
  },
  bulkShortener: function(tweets){
    return tweets.map(tweet=>{
      return this.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      tweet = this.wordSubstituter(tweet);
    }
    return tweet;
  },
  shortenedTruncator: function(tweet){
    var newTweet = this.selectiveShortener(tweet);
    if (newTweet.length >= 140) {
      newTweet = newTweet.slice(0,137) + "..."
      return newTweet;
    }
    return newTweet;
  }
};

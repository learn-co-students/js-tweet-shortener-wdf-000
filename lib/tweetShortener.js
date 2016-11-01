'use strict';

const replacements = {hello: "hi", to: "2", too: "2", two: "2", for: "4", four: "4", be: "b", you: "u", at: "@", and: "&"}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetWords = tweet.split(" ");
    var arr = [];
    tweetWords.forEach(function(word) {
      if (Object.keys(replacements).includes(word.toLowerCase())) {
        arr.push(replacements[word.toLowerCase()]);
      } else {
        arr.push(word);
      }
    });
    return arr.join(" ");
  },
  bulkShortener: function(tweets){
    var arr = [];
    tweets.forEach(function(tweet) {
      arr.push(tweetShortener.wordSubstituter(tweet))
    });
    return arr;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet)
    } else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    var shorter = tweetShortener.wordSubstituter(tweet);
    if (shorter.length > 140) {
      var slice = shorter.slice(0, 137);
      return slice + "..."
    } else {
      return tweet
    }
  }
};

'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/\bto+\b/gi, "2");
    tweet = tweet.replace(/\bbe\b/gi, "b");
    tweet = tweet.replace(/\bat\b/gi, "@");
    tweet = tweet.replace(/\byou\b/gi, "u");
    tweet = tweet.replace(/\band\b/gi, "&");
    tweet = tweet.replace(/\bfor\b/gi, "4");
    return tweet;
  },
  bulkShortener: function(tweets){
    var shortTweets = tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
    return shortTweets;
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140){
      return this.wordSubstituter(tweet)
    } else {
      return tweet;
    };
  },
  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet);
    if(shortTweet.length > 140){
      return shortTweet.substring(0, 137) + "...";
    } else {
      return shortTweet;
    };
  }
};

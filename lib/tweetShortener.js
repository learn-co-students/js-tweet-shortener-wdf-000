'use strict';

var shorten = {
  "hello" : 'hi',
  "to" :'2', "two" :'2', "too" :'2',
  "for" : '4', "four" : '4',
  'be' : 'b',
  'you' : 'u',
  "at" : "@",
  "and" : "&"
}

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var tweet_words = tweet.split(" ")
    for (var i in tweet_words) {
      if ( shorten[ tweet_words[i].toLowerCase() ] ) {
        tweet_words[i] = shorten[ tweet_words[i].toLowerCase() ]
      }
    }
    return tweet_words.join(" ")
  },
  
  bulkShortener: function(tweets) {
    var shortened_tweets = [];
    for (var i in tweets) {
      shortened_tweets.push( this.wordSubstituter(tweets[i]) )
    }
    return shortened_tweets;
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

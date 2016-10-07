'use strict';

const substitutes = {
    "hello": 'hi',
    "to": '2', "two": '2', "too": '2',
    "for": '4', "For": '4', "four": '4',
    'be': 'b',
    'you': 'u',
    "at": "@",
    "and": "&"
  }
const keyWords = Object.keys(substitutes);

var tweetShortener = {

  wordSubstituter: function(tweet){
    var shortened_tweet = tweet;
    keyWords.forEach(function (word){
      shortened_tweet = shortened_tweet.split(` ${word} `).join(` ${substitutes[word]} `);
      // tweet = shortened_tweet;
    })
    return shortened_tweet;
  },
  bulkShortener: function(tweets){
    var tweetBulk = [];
    tweets.forEach(function (tweet){
      tweetBulk.push(tweetShortener.wordSubstituter(tweet));
    });
    return tweetBulk;
  },
  selectiveShortener: function(tweet){
    var shortened_tweet;
    tweet.length > 140 ? shortened_tweet = tweetShortener.wordSubstituter(tweet) : shortened_tweet = tweet;
    return shortened_tweet;
  },
  shortenedTruncator: function(tweet){
    var tempTweet = tweetShortener.selectiveShortener(tweet);
    if (tempTweet.length > 140){
      var truncatedTweet = tempTweet.substring(0,137) + '...';
      return truncatedTweet;
    } else {
      return tempTweet;
    }
  }
};

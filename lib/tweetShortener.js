'use strict';



var tweetShortener = {

  wordSubstituter: function(tweet){
    var tempTweet = tweet;
    var tempTweet2;
    var substitutes = {
        "hello": 'hi',
        "to": '2', "two": '2', "too": '2',
        "for": '4', "four": '4',
        'be': 'b',
        'you': 'u',
        "at": "@",
        "and": "&"
      }
    var keyWords = Object.keys(substitutes);
    var shortTweet = tweet;
    function generateRegex(word){
      var rex = new RegExp(`\\b${word}\\b`,'ig');
      return rex;
    }
    keyWords.forEach(function (word){
      tempTweet2 = tempTweet.replace(generateRegex(word), substitutes[word]);
        // console.log(tempTweet.replace(generateRegex(word), substitutes[word]));
        tempTweet = tempTweet2;
      });
    return tempTweet;
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
    tempTweet = tweetShortener.selectiveShortener(tweet);
    if (tempTweet.length > 140){
      var truncatedTweet = tempTweet.substring(0,137) + '...';
      return truncatedTweet;
    } else {
      return tempTweet;
    }
  }
};

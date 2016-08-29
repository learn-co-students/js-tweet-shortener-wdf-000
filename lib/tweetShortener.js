'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var words = tweet.split(" ");
    var fixed = words.map(function(word){
      switch (word) {
        case "hello":
          return "hi";
          break;
        case "to":
        case "two":
        case "too":
          return "2";
          break;
        case "for":
        case "For":
        case "four":
          return "4";
          break;
        case "be":
          return "b";
          break;
        case "you":
          return "u";
          break;
        case "at":
          return "@";
          break;
        case "and":
          return "&";
          break;
        default:
          return word;
      }
    });
    return fixed.join(" ");
  },
  bulkShortener: function(tweet_array){
    var new_tweets = tweet_array.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
    return new_tweets;
  },
  selectiveShortener: function(tweet){
    var characters = tweet.split("")
    if(characters.length > 140){
      return tweetShortener.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.split("").length > 140) {
      var new_tweet = tweetShortener.selectiveShortener(tweet)
      var characters = new_tweet.split("")
      if(characters.length > 140){
        return characters.slice(0, 137).join("") + "..."
      }
    else {
      return new_tweet;
    }
  }
  else {
    return tweet;
  }
}
}

'use strict';

var tweetShortener = {
wordSubstituter: function(tweet){

  tweet = tweet.replace(/\bhello\b/gi, "hi");
  tweet = tweet.replace(/\b(to|too|two)\b/gi, "2");
  tweet = tweet.replace(/\b(four|for)\b/gi, "4");
  tweet = tweet.replace(/\bbe\b/gi, "b");
  tweet = tweet.replace(/\byou\b/gi, "u");
  tweet = tweet.replace(/\bat\b/gi, "@");
  tweet = tweet.replace(/\band\b/gi, "&");
  return tweet;
},



bulkShortener: function(bulk){
    //iterate over the array and run each string with the wordSubstituter function
    // store the result in an array and return the new arr.
    var arr = [];
    for(var i = 0; i < bulk.length; i++){
      var newString = this.wordSubstituter(bulk[i])
      arr.push(newString)
    }
    return arr

  },


  selectiveShortener: function(tweet){
    if(tweet.length > 140){
     return this.wordSubstituter(tweet)
    } else { return tweet}
  },

  shortenedTruncator: function(tweet){
    if(tweet.length < 140){return tweet
    } else {
      var newTweet = this.wordSubstituter(tweet)
        if(newTweet.length > 140){
          var result = newTweet.slice(0, 137) + "..."
          return result
        }
    }
  }



 };

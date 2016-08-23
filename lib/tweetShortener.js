'use strict';

var tweetShortener = {
  wordSubstituter: function(str){
    str = str.replace(/\bhello\b/gi, "hi");
    str = str.replace(/\bto\b/gi, "2")
    str = str.replace(/\btwo\b/gi, "2")
    str = str.replace(/\btoo\b/gi, "2")
    str = str.replace(/\bfor\b/gi, "4")
    str = str.replace(/\bfour\b/gi, "4")
    str = str.replace(/\bbe\b/gi, "b")
    str = str.replace(/\byou\b/gi, "u")
    str = str.replace(/\bat\b/gi, "@")
    str = str.replace(/\band\b/gi, "&")
    return str;
  },
  bulkShortener: function(arr){
    var shortened = [];
    for (var i = 0; i < arr.length; i++){
      shortened.push(this.wordSubstituter(arr[i]));
    }
    return shortened;
  },
  selectiveShortener: function(tweet){
    return tweet.length < 140 ? tweet : this.wordSubstituter(tweet)
  },
  shortenedTruncator: function(longTweet){
    var shortenedResult = this.selectiveShortener(longTweet)
    if (shortenedResult.length >= 140){
      return shortenedResult.slice(0, 137) + "..."
    } else {
      return longTweet
    }
  }
};




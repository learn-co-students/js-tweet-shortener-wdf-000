'use strict';

var tweetShortener = {
  wordSubstituter: function(string) {
    string = string.replace(/\bhello\b/gi, "hi");
    string = string.replace(/\btw?oo?\b/gi, "2");
    string = string.replace(/\bfou?r\b/gi, "4");
    string = string.replace(/\bbe\b/gi, "b");
    string = string.replace(/\byou\b/gi, "u");
    string = string.replace(/\bat\b/gi, "@");
    string = string.replace(/\band\b/gi, "&");
    return string;
  },

  bulkShortener: function(array) {
    return array.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet)
    });
  },

  selectiveShortener: function(tweet) {
    if (tweet.length > 140)
      return this.wordSubstituter(tweet);
   else
      return tweet;
  },

  shortenedTruncator: function(tweet){
    var shortened = this.selectiveShortener(tweet)
    if (shortened.length > 140)
      return shortened.substring(0,137) + "...";
    else
      return shortened;
  }
};

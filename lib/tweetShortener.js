'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    string = string.replace(/\bat\b/gi, "@");
    string = string.replace(/\btw?oo?\b/gi, "2");
    string = string.replace(/\bbe\b/gi, "b");
    string = string.replace(/\byou\b/gi, "u");
    string = string.replace(/\bhello\b/gi, "hi");
    string = string.replace(/\band\b/gi, "&");
    string = string.replace(/\bfou?r\b/gi, "4");
    return string;
  },
  bulkShortener: function(array){
    var tmp = [];
    array.forEach(function(string) { tmp.push(tweetShortener.wordSubstituter(string)) })
    return tmp;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else
      return tweet;
  },
  shortenedTruncator: function(tweet){
    var processed = tweetShortener.selectiveShortener(tweet)
    if (processed.length > 140)
      return processed.substring(0,137) + "...";
    else
      return processed;
  }
};

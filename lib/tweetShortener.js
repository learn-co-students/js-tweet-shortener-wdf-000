'use strict';

var tweetShortener = {
  wordSubstituter: function(sentence){
    sentence = sentence.replace(/\bhello\b/gi,"hi");
    sentence = sentence.replace(/\b(too|two|to)\b/gi,"2");
    sentence = sentence.replace(/\b(for|four)\b/gi,"4");
    sentence = sentence.replace(/\bbe\b/gi,"b");
    sentence = sentence.replace(/\byou\b/gi,"u");
    sentence = sentence.replace(/\bat\b/gi,"@");
    sentence = sentence.replace(/\band\b/gi,"&");
    return sentence;
  },
  bulkShortener: function(arr){
    var tmp = this.wordSubstituter;
    return arr.map(function(tweet) {
      return tmp(tweet);
    });
  },
  selectiveShortener: function(string){
    var len = string.length;
    if (len > 140) {
      return this.wordSubstituter(string);
    } else {
      return string;
    }
  },
  shortenedTruncator: function(string){
    var shortened = this.selectiveShortener(string);
    var len = shortened.length;
    if (len > 140) {
      var tmp = shortened.substring(0,137) + "...";
      return tmp;
    } else {
      return shortened;
    }
  }
};

'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var array = string.split(" ")
    for (var i = 0; i < array.length; i++){
      switch(array[i]){
     case "hello":
         array[i] = "hi";
         break;
     case "to":
         array[i] = "2";
         break;
    case "two":
        array[i] = "2";
        break;
    case "too":
        array[i] = "2";
        break;
    case "for":
        array[i] = "4";
        break;
    case "For":
        array[i] = "4";
        break;
    case "four":
        array[i] = "4";
        break;
    case "Four":
        array[i] = "4";
        break;
    case "be":
        array[i] = "b";
        break;
    case "you":
        array[i] = "u";
        break;
    case "at":
        array[i] = "@";
        break;
    case "and":
        array[i] = "&";
        break;
     default:
       array[i];
 }
    }
    return array.join(" ");
  },

  bulkShortener: function(string_array){
    arr = [];
    for(var i = 0; i < string_array.length; i++){
      arr.push(this.wordSubstituter(string_array[i]));
    }
    return arr;
  },

  selectiveShortener: function(string){
    if (string.length > 140){
      return this.wordSubstituter(string);
    }else {
      return string;
    }
  },

  shortenedTruncator: function(string){
    arr = [];
    truncated = [];
    shortend_string = this.selectiveShortener(string).split(" ");
    if (shortend_string > 140){
        truncated = shortend_string.substring(0,137).concat("...");
    }
      return truncated;
  }
};

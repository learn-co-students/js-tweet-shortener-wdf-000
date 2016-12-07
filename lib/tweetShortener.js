'use strict';

var shortcuts = {
  hello: 'hi',
  to: '2',
  two: '2',
  too: '2',
  for: '4',
  four: '4',
  be: 'b',
  you: 'u',
  at: '@',
  and: '&'
}

var tweetShortener = {
  wordSubstituter: function(string){
    var array = string.split(" ");
    var temp = [];
    array.forEach(function(word){
      if(shortcuts[word.toLowerCase()]){
        temp.push(shortcuts[word.toLowerCase()]);
      } else{
        temp.push(word);
      }
    })
    return temp.join(" ");
  },
  bulkShortener: function(array){
    var temp = [];
    array.forEach(function(string) {
      temp.push(tweetShortener.wordSubstituter(string));
    })
    return temp;
  },
  selectiveShortener: function(string){
    if(string.length > 140) {
      return string.slice(0, 137) + "...";
    } else {
      return string;
    }
  },
  shortenedTruncator: function(string){
    if(string.length > 140) {
      var newString = tweetShortener.wordSubstituter(string);
      return tweetShortener.selectiveShortener(newString); 
    } else {
      return string;
    }
  }
};



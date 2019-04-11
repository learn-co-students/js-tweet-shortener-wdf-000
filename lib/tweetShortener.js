'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/\bhello\b/gi, "hi");
    tweet = tweet.replace(/\btwo\b/gi, "2");
    tweet = tweet.replace(/\bto\b/gi, "2");
    tweet = tweet.replace(/\btoo\b/gi, "2");
    tweet = tweet.replace(/\bfor\b/gi, "4");
    tweet = tweet.replace(/\bfour\b/gi, "4");
    tweet = tweet.replace(/\bbe\b/gi, "b");
    tweet = tweet.replace(/\byou\b/gi, "u");
    tweet = tweet.replace(/\bat\b/gi, "@");
    tweet = tweet.replace(/\band\b/gi, "&");
    return tweet;


    // var arr = tweet.split(' ')
    // for (var i=0; i < arr.length; i++) {
    //   if(arr[i] === 'hello') {
    //     arr[i] = 'hi' };
    //   if(arr[i] === 'hello') {
    //     arr[i] = 'hi' };
    //   if(arr[i] === 'to' || arr[i] === 'two' || arr[i] === 'too') {
    //     arr[i]='2' };
    //   if(arr[i] === 'for' || arr[i] === 'four') {
    //     arr[i]='4' };
    //   if(arr[i] === 'be') {
    //     arr[i]='b' };
    //   if(arr[i] === 'you') {
    //     arr[i]='u' };
    //   if(arr[i] === 'at') {
    //     arr[i]='@' };
    //   if(arr[i] === 'and') {
    //     arr[i]='&' };
    // }
    // return arr.join(' ');
  },

  bulkShortener: function(bulk){
    var short = [];
    for (var i=0; i < bulk.length; i++) {
      short.push(this.wordSubstituter(bulk[i]));
    }
    return short;
  },

  selectiveShortener: function(tweet){
    return tweet.length < 140 ? tweet : this.wordSubstituter(tweet);
  },

  shortenedTruncator: function(tweet){
    var shorter = this.selectiveShortener(tweet);
    return shorter.length < 140 ? shorter : shorter.slice(0, 137) + '...'; 
  }
};

'use strict';

var tweetShortener = {

  wordSubstituter: function(tweet){
    var split = tweet.split(' ');
      for(var i = 0; i < split.length; i++) {
      switch(split[i]){
        case 'hello':
          split[i] = 'hi';
          break;
        case 'to':
          split[i] = '2'
          break;
        case 'two':
          split[i] = '2'
          break;
        case 'too':
          split[i] = '2'
          break;
        case 'for':
          split[i] = '4'
          break;
        case 'For':
          split[i] = '4'
          break;
        case 'four':
          split[i] = '4'
          break;
        case 'be':
          split[i] = 'b'
          break;
        case 'you':
          split[i] = 'u'
          break;
        case 'at':
          split[i] = '@'
          break;
        case 'and':
          split[i] = '&'
          break;
      }
    }
    return split.join(' ')
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }
    return tweet;
  },

  shortenedTruncator: function(tweet){
    var short = this.selectiveShortener(tweet);
    if (short.length >= 140) {
     return short.slice(0, 137) + "...";
   }

   return short;
  }

};

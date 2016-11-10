'use strict';

var tweetShortener = {
  wordSubstituter: function (string){
    var string_array = string.split(" ")
    for(var i=0;i<string_array.length;i++)
    {
      switch(string_array[i]){
        case 'hello':
          string_array[i] = 'hi'
          break;
        case 'to':
          string_array[i] = '2'
          break;
        case 'two':
          string_array[i] = '2'
          break;
        case 'too':
          string_array[i] = '2'
          break;
        case 'for':
          string_array[i] = '4'
          break;
        case 'For':
          string_array[i] = '4'
          break;
        case 'four':
          string_array[i] = '4'
          break;
        case 'be':
          string_array[i] = 'b'
          break;
        case 'you':
          string_array[i] = 'u'
          break;
        case 'at':
          string_array[i] = '@'
          break;
        case 'and':
          string_array[i] = '&'
          break;
      }
    }
    return string_array.join(' ')
  },
  bulkShortener: function (tweets){
    var ary = []
    for(var i=0;i<tweets.length;i++) {
      ary.push(this.wordSubstituter(tweets[i]))
    }
    return ary
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet)
    } else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    var shortened_tweet = this.selectiveShortener(tweet)
    if (shortened_tweet.length > 140){
      return shortened_tweet.substring(0, 137).concat("...");
    } else {
      return shortened_tweet;
    }
  }
};

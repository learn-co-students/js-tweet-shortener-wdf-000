'use strict';

const tweetWords = {
  hello: 'hi',
  to: '2',
  two: '2',
  too: '2',
  for: '4',
  four: '4',
  be: 'b',
  you: 'u',
  at: "@",
  and: "&"
};

const tweets = [
  "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!",
  "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?"
];

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.split(' ').map(function(elem){
      // strips all punctuation
      let word = elem.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
      // return only punctuation
      // using iffy - immediately-invoked function expression
      let punc = (function(string){
        // result is null if no punctuation exists
        let result = string.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g);
        return result ? result.join('') : '';
      })(elem);
      return Object.keys(tweetWords).includes(word)
      ? tweetWords[word] + punc
      : elem;
    }).join(' ');
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },
  selectiveShortener: function(tweet) {
    return tweet.length > 140 ?
    this.wordSubstituter(tweet) :
    tweet;
  },
  shortenedTruncator: function(tweet) {
    let result = this.selectiveShortener(tweet);
    return result.length > 140 ?
    result.slice(0, 137) + "..." :
    result;
  }
};


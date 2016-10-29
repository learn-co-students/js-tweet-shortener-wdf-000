'use strict';

const dictionary = {
  hello: 'hi',
  to: 2,
  two: 2,
  too: 2,
  for: 4,
  For: 4,
  four: 4,
  be: 'b',
  you: 'u',
  at: "@",
  and: "&"
};

// return a new word without punctuation
function stripPunctuation(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
}

// capture punctuation
function getPunctuation(word) {
  return word.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g);
}

function wordReplacer(word) {
  let wordWithoutPunctuation = stripPunctuation(word);
  let punctuation = getPunctuation(word);

  if (Object.keys(dictionary).includes(wordWithoutPunctuation)) {
    return punctuation !== null ? dictionary[word] + punctuation : dictionary[word];
  }

  return word;
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.split(' ').map(wordReplacer).join(' ');
  },
  bulkShortener: function(tweets){
    return tweets.map(this.wordSubstituter);
  },
  selectiveShortener: function(tweet){
    return tweet.length <= 140 ? tweet : this.wordSubstituter(tweet);
  },
  shortenedTruncator: function(tweet){
    if (tweet.length >= 140) {
      let shortened = this.selectiveShortener(tweet);
      
      if (shortened.length <= 140) {
        return shortened;
      } else {
      let truncated = shortened.substr(0, 137);
      return truncated + '...';
      }
    }

    return tweet;
  }
};

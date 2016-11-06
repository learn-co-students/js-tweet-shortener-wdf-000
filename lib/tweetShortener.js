'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
  // \b - Find a match at the beginning or at the end of a word
  // g - Perform a global match (find all matches rather than stopping after the first match)
  // i - Perform case-insensitive matching

   tweet = tweet.replace(/\bhello\b/gi, "hi");
   tweet = tweet.replace(/\b(to|too|two)\b/gi, "2");
   tweet = tweet.replace(/\b(four|for)\b/gi, "4");
   tweet = tweet.replace(/\bbe\b/gi, "b");
   tweet = tweet.replace(/\byou\b/gi, "u");
   tweet = tweet.replace(/\bat\b/gi, "@");
   tweet = tweet.replace(/\band\b/gi, "&");

  return tweet;
  },
  bulkShortener: function(tweetsArray){
    let result = [];
    tweetsArray.forEach(word => {
      result.push(this.wordSubstituter(word));
    });
    return result;
  },
  selectiveShortener: function(tweets){
    return (tweets.length > 140) ? this.wordSubstituter(tweets) : tweets;
  },
  shortenedTruncator: function(tweets){
    return (tweets.length > 140) ? (this.wordSubstituter(tweets).slice(0, 137) + "...") : tweets;   
  }
};

'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var str = tweet.split(" ")
    for (var i = 0, len = str.length; i < len; i++) {
     switch (str[i]) {
       case 'to':
         str[i] = "2"  
         break;
       case 'be':
         str[i] = "b"  
         break;
       case 'at':
         str[i] = "@"  
         break;
       case 'you':
         str[i] = "u"  
         break;
       case 'two':
         str[i] = "2"  
         break;
       case 'and':
         str[i] = "&"  
         break;
       case 'too':
         str[i] = "2"  
         break;
       case 'for':
         str[i] = "4"  
         break;
       case 'For':
         str[i] = "4"  
         break;
       default:
         
     } 
    }    
    return str.join(" ")
  },
  bulkShortener: function(arr){
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i] = this.wordSubstituter(arr[i]);
    } 
    return arr; 
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      tweet = this.wordSubstituter(tweet);
      tweet = this.shortenedTruncator(tweet);
      return tweet; 
    } else {
      return tweet;
    } 
  
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      tweet = this.wordSubstituter(tweet);
      if (tweet.length > 140) {
        var tmp = tweet.slice(0, 137);
        var tmp =  tmp + "...";
      }
      return tmp;
    } else {
      return tweet 
    } 
  }

};

    // var longTweet = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
    // var shortenedTweet = tweetShortener.shortenedTruncator(longTweet);


    // console.log(tweetShortener.shortenedTruncator(longTweet).length == shortenedTweet.length)

    // var tweet_one = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
    // var tweet_two = "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?";
    // var tweet_three = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
    // var tweet_four = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy and mammogram soon. Prevention is key! #swag";
    // var tweet_five = "I'm running out of example tweets for you guys, which is weird, because I'm a writer and this is just writing and I tweet all day. For real, you guys. For real.";

    // var tweet_one_short = "Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!";
    // var tweet_two_short = "OMG u guys, u won't believe how sweet my kitten is. My kitten is like super cuddly & 2 cute 2 b believed right?";
    // var tweet_three_short = "GUISEEEEE this is so fun! I'm tweeting 4 u guys & this tweet is SOOOO long it's gonna b way more than u would think twitter can handle, so shorten it up u know what I mean? I just can never tell how long 2 keep typing!";
    // var tweet_four_short = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy & mammogram soon. Prevention is key! #swag";
    // var tweet_five_short = "I'm running out of example tweets 4 u guys, which is weird, because I'm a writer & this is just writing & I tweet all day. 4 real, u guys. 4 real.";

    // var tweets = [tweet_one, tweet_two, tweet_three, tweet_four, tweet_five];
    // var shortened_tweets = [tweet_one_short, tweet_two_short, tweet_three_short, tweet_four_short, tweet_five_short];


// var tmp = tweetShortener.bulkShortener(tweets);
// for (var i = 0, len = tmp.length; i < len; i++) {
  // // if ( tmp[i] == tweets[i]) {
  // // }
  // console.log(tmp[i]);
  // console.log(shortened_tweets[i]);
// }
// // if (tweetShortener.bulkShortener(tweets) == (shortened_tweets)) {
// //   console.log("my vimrc has conflicts");
// // }

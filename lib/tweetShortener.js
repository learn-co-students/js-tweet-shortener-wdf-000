'use strict';


var tweetShortener = {


  wordSubstituter: function(tweet){
       var str = tweet
        var rep1 = str.split(" hello ").join("hi")
        var rep2 = rep1.split(" too ").join(" 2 ")

        var rep3 = rep2.split(" to ").join(" 2 ")
        var rep4 = rep3.split(" two ").join(" 2 ")
        var rep5 = rep4.split(" for ").join(" 4 ")
        var rep6 = rep5.split(" four ").join(" 4 ")
        var rep7 = rep6.split(" you ").join(" u ")
        var rep8 = rep7.split(" at ").join(" @ ")
        var rep9 = rep8.split(" and ").join(" & ")
        var rep10 = rep9.split(" be ").join(" b ")

        var rep11 = rep10.split("Hello").join("Hi")
        var rep12 = rep11.split("Too").join("2")
        var rep13 = rep12.split("To").join("2")
        var rep14 = rep13.split("Two").join("2")
        var rep15 = rep14.split("For").join("4")
        var rep16 = rep15.split("Four").join("4")
        var rep17 = rep16.split("You").join("u")
        var rep18 = rep17.split("At ").join("@ ")
        var rep19 = rep18.split("And").join("&")
        var rep20 = rep19.split("Be ").join("B ")

        return rep20
    },

  bulkShortener: function(tweet){
    var l = tweet.toString()
    if(l.length > 140) {
      var i = 0
      var arr = []
      while(i < tweet.length) {
        var t = this.wordSubstituter(tweet[i])
        arr.push(t)
        i++
      }
      return arr
    }
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet)
    } else {
      return tweet
    }

  },


  shortenedTruncator: function(tweet){
    // if (tweet.length > 140) {
      if (this.wordSubstituter(tweet) > 140) {
        var short = this.wordSubstituter(tweet).slice(0,137)
        return short += "..."


    } else{
      return tweet
    }
  }
};
//
//   var over140 = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
//   var under140 = "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?";
//   var over140Too = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
//   var under140Too = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy and mammogram soon. Prevention is key! #swag";
//
//
// function selectiveShortener(tweet){
//
//
//   if (tweet.length > 140) {
//     return this.wordSubstituter(tweet)
//     debugger;
//   }
// }

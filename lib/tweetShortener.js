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


  bulkShortener: function(tweets){
    var object = this

    var arr = tweets.map(function(tweet) {
        // arr.push(object.wordSubstituter(tweet))
        return object.wordSubstituter(tweet)
    });
    // console.log(arr)
    return arr
  },


  selectiveShortener: function(tweet){
    // doesnt work as of now
    var object = this
    // var arr = tweets.map(function(tweet) {
      if (tweet.length > 140) {
    //     // arr.push(object.wordSubstituter(tweet))
        return object.wordSubstituter(tweet)

      } else {
    //     // arr.push(tweet)
        return tweet
      }
    //
    // })
    // // console.log(arr)
    // return arr
  },



  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet)


    if (shortTweet.length >= 140) {
      return tweet.slice(0, 137) + "..."
    } else {
      return shortTweet
    }

  }


};

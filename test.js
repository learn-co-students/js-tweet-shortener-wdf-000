var tweet = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
var word = tweet.split(" ")

const replacements = {
  hello: "hi",
  to: "2",
  two: "2",
  too: "2",
  for: "4",
  four: "4",
  you: "u",
  at: "@",
  and: "&"
}

function rep(tweet) {
  var str = tweet
  var rep1 = str.split("hello").join("hi")
  var rep2 = rep1.split("to").join("2")
  var rep3 = rep2.split("too").join("2")
  var rep4 = rep3.split("two").join("2")
  var rep5 = rep4.split("for").join("4")
  var rep6 = rep5.split("four").join("4")
  var rep7 = rep6.split("you").join("u")
  var rep8 = rep7.split(" at ").join("@")
  var rep9 = rep8.split("and").join("&")
  return rep9
}



function x() {
  var arr = tweet.map(function(w){
    for (var j = 0; j < Object.keys(replacements).length; j++) {
      if (w === Object.keys(replacements)[j]) {
        var str = tweet.replace()
        w = replacements[Object.keys(replacements)[j]]
        return w
      }
    }
  })
  debugger;
  return arr
}

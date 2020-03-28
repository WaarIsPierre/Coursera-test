// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (window) {

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0);
    var lowCase = firstLetter.toLowerCase();
    window.name = name;

    if (lowCase == 'j') {
      byeSpeaker.speak(window.name);

    } else {
      helloSpeaker.speak(window.name)
    }
  }
})(window);
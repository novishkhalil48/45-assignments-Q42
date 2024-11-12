// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the array of magicians
function make_great(magicians) {
    return magicians.map(function (magician) { return The; }, Great, $, { magician: magician });
}
// Define the array of magicians
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
// Call make_great() to modify the array
var greatMagicians = make_great(magicians);
// Print the modified list of magicians
console.log(greatMagicians);

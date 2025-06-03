// var farn = parseFloat(prompt("Enter fahrenheit = "));
// var cels = (farn - 32) * (5/9);
// document.write("Celsius = " + cels );

var cels = parseFloat(prompt("Enter celsius = "));
var farn = (cels * (9/5)) + 32;
document.write("Fahrenheit = " + farn);
var num1= prompt("Enter First Number : ");
var num2= prompt("Enter Second Number : ");

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var sum,sub;

// sum = num1 + num2;
// document.write("Addition = " + sum + "<br/>");

// sub = num1 - num2;
// document.write("Subtraction = " + sub);


sum = num1 + num2;
document.write(num1 + " + " + num2 + " = " + sum + "<br/>");


sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br/>");

intu = num1 * num2;
document.write(num1 + " * " + num2 + " = " + intu + "<br/>");

divided = num1 / num2;
document.write(num1 + " / " + num2 + " = " + divided + "<br/>");


modulus = num1 % num2;
document.write(num1 + " % " + num2 + " = " + modulus + "<br/>");
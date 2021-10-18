// This is an in-line comment
/* This is a 
multi-line comment */

var a;
a = 7;
var b;
b = a;

// initialize a variable to an initial value in the same line as it is declared
var a = 9;

/* When JavaScript variables are declared, they have an initial value of undefined.
number + undefined = NaN (Not a Number)
string + undefined = "undefined" */

var a;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

/*  variables and function names are case sensitive
best practice = camelCase */

var myVariable;
var ourVariable;

// Number is a data type in JavaScript which represents numeric data.

var sum = 12 + 15;
var difference = 72 - 38;
var product = 5 * 7;
var quotient = 66 / 3;

// increment or add one to a variable with ++

var myVar = 87;
myVar++;

// decrement or decrease a variable by one with --
var myVar = 11;
myVar--;

// decimal numbers = floats

var myDecimal = 8.9;

// multiply decimals like whole numbers

var product = 2.0 * 2.5;

//  divide one decimal by another with

var quotient = 4.4 / 2.0;

// % = remainder operator; not to be confused with modulus(does not work properly with negative numbers)

var remainder = 11 % 3;

// adding a number to the same variable

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

// subtracting a number to the same variable

var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

// multiplying a number to the same variable

var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// dividing a number to the same variable
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

console.log(a, b, c);

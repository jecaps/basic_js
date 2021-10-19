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

// A string is a series of zero or more characters enclosed in single or double quotes

var myFirstName = "Jerika";
var myLastName = "Kanz";

// escape a quote using backslash (\) (vscode automatically changes and uses single and double quotes for string data types)

var myStr = 'I am a "double quoted" string inside "double quotes".';

/* \'	single quote
  \"	double quote
  \\	backslash
  \n	newline
  \r	carriage return
  \t	tab
  \b	word boundary
  \f	form feed*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

/* '+' concatenation operator of a string
  Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself. */

var myStr = "This is the start. " + "This is the end.";

// '+=' to concatenate a string onto the end of an existing string variable

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// By using the concatenation operator (+), you can insert one or more variables into a string you're building.

var myName = "Jerika";
var myStr = "My name is " + myName + " and I am well!";

// '+=' to concatenate a string variable onto the end of an existing string variable

var someAdjective = "not that hard.";
var myStr = "Learning to code is ";
myStr += someAdjective;

// You can find the length of a String value by writing .length after the string variable or string literal.

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

/* Bracket notation is a way to get a character at a specific index within a string.
  starts counting at 0*/

var lastName = "Kanz";
var firstLetterOfLastName = lastName[0];

/* String values are immutable, which means that they cannot be altered once created.
  This does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed.*/

var myStr = "Jello World";
myStr = "Hello World";

// Bracket notation to get the character at other positions within a string.

var LastName = "Kanz";
var thirdLetterOfLastName = lastName[2];

// -1 to string's length to get the last letter of the string

var lastLetterOfLastName = lastName[lastName.length - 1];

// Use array to store several pieces of data into one variable array

var myArray = ["Jerika", 27, "Germany"];

// Array within an array = multi-dimensional array

var myArray = [
  ["Jerika", 27, "Philippines"],
  ["Andreas", 32, "Germany"],
  ["Karen", 25, "France"],
];

/* Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.
  There shouldn't be any spaces between the array name and the square brackets, like array [0].*/

var myArray = [50, 60, 70];
var myData = myArray[0];

// arrays = mutable

var myArray = [18, 64, 99];
myArray[0] = 45;

// The first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
]; // Use bracket notation to select number 8
var myData = myArray[2][1];

// append data to the end of an array with push()

var arr1 = [1, 2, 3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// .pop() removes the last element from an array and returns that element.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();

// .shift() removes the first element from an array

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromArray = ourArray.shift();

// .unshift() adds an element at the beginning of an array to the

ourArray.unshift("Happy");

/* A function is a block of code designed to perform a particular task.
  A function is executed when "something" invokes it (calls it).*/

function reusableFunction() {
  console.log("Hi World");
}

/* Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
  When a function is defined, it is typically defined along with one or more parameters. 
  The actual values that are input (or "passed") into a function when it is called are known as arguments. */

function functionWithArgs(p1, p2) {
  console.log(p1 + p2);
}

/* Variables which are defined outside of a function block have Global scope. 
  This means, they can be seen everywhere in your JavaScript code. */

/*Instructions : Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
  Inside function fun1, assign 5 to oopsGlobal without using the var keyword.*/

function fun1() {
  oopsGlobal = 5;
}
var myGlobal = 10;

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Variables which are declared within a function, as well as the function parameters, have local scope.

function myLocalScope() {
  var theVar = "I am a local scope";
  console.log("inside myLocalScope", theVar);
}
myLocalScope();
// console.log("outside myLocalScope", theVar);

/* It is possible to have both local and global variables with the same name. 
  local variable >>>> global variable */

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
console.log(myFun());

//

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);

console.log(answer);

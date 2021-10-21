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

// A function is executed when "something" invokes it (calls it).

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

/* We can pass values into a function with arguments. 
  You can use a return statement to send a value back out of a function. */

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);

/* Return statement stops the execution of a function and returns a value from that function.
 */

var sum = 0;

function addThree() {
  sum += 3;
}

function addFive() {
  sum += 5;
}

console.log(addThree());
console.log(addFive());
console.log(sum);

// We can take the return value of a function and assign it to a variable.

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

/* booleans = either true or false 
  never written in quotes*/

function myBoolean() {
  return true;
}

console.log(myBoolean());

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
console.log(test(true));
console.log(test(false));

// 3 == '3' is true; 3 === '3' is false;

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10"); //returns false because '===' does not perform type coversion

function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10"); //returns false because '==' performs type coversion

// != means 'not equal'
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// !== means 'strictly not equal' and does not perform type coversion

function testNotEqual(val) {
  if (val !== 10) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// If number on the left side of the '>' operator is larger than the number on the right, it returns true.

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// If number on the left side of the '>=' operator is larger than or equal to the number on the right, it returns true.

function testGreaterOrEqual(val) {
  if (val >= 100) {
    return "100 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// If number on the left side of the '<' operator is less than the number on the right, it returns true.

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// If number on the left side of the '<=' operator is less than or equal to the number on the right, it returns true.

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller than or equal to 12";
  }
  if (val <= 24) {
    return "Smaller than or equal to 24";
  }
  return "More than 24";
}
testLessOrEqual(10);

// The AND operator (&&) returns true if both expressions are true.

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// The OR operator (||) returns true if one or both expressions are true.

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(13);

function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);

// Use 'else if' to specify a new condition to test, if the first condition is false.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// The function is executed from top to bottom so you will want to be careful of what statement comes first.

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

foo(0);
bar(0);

// If/ else statements can be chained together for complex logic.

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
}
testSize(7);

/* The switch statement is used to perform different actions based on different conditions.
  'Break' will stop the execution inside the switch block.
  'case' values are tested with strict equality (===).*/

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

// Add default statement which will be executed if no matching case statements are found.

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
switchOfStuff("a");

// If you have multiple inputs with the same output, you can represent them in a switch statement like this:

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
sequentialSizes(1);

// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements.

function chainToSwitch(val) {
  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch (val) {
    case "bob":
      return "Marley";
    case 42:
      return "The Answer";
    case 1:
      return "There is no #1";
    case 99:
      return "Missed me by this much!";
    case 7:
      return "Ate Nine";
  }
}
console.log(chainToSwitch(99));

// Better way to write a comparison

function isLess(a, b) {
  // if (a < b) {
  //   return true;
  // } else {
  //   return false;
  // }

  return a < b;
}
console.log(isLess(10, 15));

// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
console.log(myFun());

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(4, 9));

//

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }

  var action = " Hold";
  if (count > 0) {
    action = " Bet";
  }

  return count + action;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};

// Use dot notation when you know the name of the property you want to access.

var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
var hatValue = testObj.hat; // to access value of hat
var shirtValue = testObj.shirt; // to access value of shirt

console.log(hatValue, shirtValue);

//  Use bracket notation if property name has a spaces

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
var entreeValue = testObj["an entree"]; // to access value of an entree
var drinkValue = testObj["the drink"]; // to access value of the drink

/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. */

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16; // assign testObj property 16 to playerNumber
var player = testObj[playerNumber]; // assign playerNumber (which is 16) to player

// Use dot or bracket notation to change or update an objects property.

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.name = "Happy Coder";
console.log(myDog);

// To add new properties to existing objects with dot or bracket notation

var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.bark = "woof!";
// myDog['bark'] = 'woof!';

console.log(myDog);

// Delete 'tails' from myDog

delete myDog.tails;

console.log(myDog);

/* Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range. */

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("delta"));

// Use .hasOwnProperty to determine if that object has a given property name.

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// flexible data structures

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Lady Gaga",
    title: "Born this way",
    release_year: 2014,
    formats: ["CD", "Spotify", "LP"],
    platinum: true,
  },
];

//

var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

/* As we have seen in earlier examples, objects can contain both nested objects and nested arrays.
  Similar to accessing nested objects, array bracket notation can be chained to access nested arrays. */

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);

var normalFunction = function () {
    return Response;
}

// ------- ARROW FUNCTION ------- //
var arrowFunction = () => 'response';

// TypeScript allows type-declaration
// TypeScript is a strongly-typed language

// Ensures that a type-declaration is done i.e., given a variable, we can declare what type the variable is. 
// a = true;
// hello-world.ts:14:1 - error TS2322: Type 'true' is not assignable to type 'number'.

// All primitive JS types are valid TS types too. 

// ------- TYPE DECLARATION ------- //
var a: number;
var b: boolean;
var c: string;

a = 100;
b = true;
c = "Hello";

// ------- PREFIX (Java) vs. POSTFIX DECLARATION (TypeScript) ------- //
// PREFIX: In Java, the declaration of the type of the variable is done before it. For example, it is, 'int a', 'float b', 'String c', etc.
// POSTFIX: In TypeScript, the declaration of the type of the variable is done after it. 

// Let us take a look at the other two primitive data types in JavaScript. 'Symbol' is ignored for now. 
// - Undefined & Null
// It is importantt to note that these two primitive data types have only one value each - undefined and null respectively. 

var foo: undefined;

// However, we don't really declare the types of undefined and null. We let TypeScript handle them implicitly. The above example is shown for illustrative purposes. 

// ------- ARRAY DECLARATIONS ------- //
// First of all, we need an array and nothing other than an array. 
// Secondly, we need to ensure what is the type of elements that are going to be added to the array.

var myNumberArray : number[];
myNumberArray = [];
myNumberArray = [1, 2, 3];

// Push, Pop, Shift and Unshift operations in the array...
myNumberArray.push(30, 50, 70);
console.log(myNumberArray);
// output: [ 1, 2, 3, 30, 50, 70 ]

myNumberArray.pop();
console.log(myNumberArray);
// output: [ 1, 2, 3, 30, 50 ]

myNumberArray.shift();
console.log(myNumberArray);
// output: [ 2, 3, 30, 50 ]

myNumberArray.unshift(30);
console.log(myNumberArray);
// output: [ 30, 2, 3, 30, 50 ]

a = myNumberArray.pop();
// This works because 'a' is typed as a number. And the element that is withdrawn is a number too.

// b = myNumberArray.pop();
// [ts] Type 'number' is not assignable to type 'boolean'. [2322]

// myNumberArray = [1, 3, "Hello"];
// [ts] Type 'string' is not assignable to type 'number'. [2322]

// In general, JS arrays contain multiple-data types. But, with the above typing, we cannot do this. 

// ------- TUPLE ------- //
// In order to deal with the problem of having elements of heterogeneous data types stored in an array, we can make use of, 'Tuples'.
// Here, we create something like an array (not essentially one). 

var myTuple : [number, boolean];
// The above is a declaration of a tuple where the first element is going to be a number and the second element being a boolean. 
// This is how type declaration is done in Tuples. 

myTuple = [1, true];
console.log(myTuple);
// output: [ 1, true ]

myTuple.push(2, false);
console.log(myTuple);
// output: [ 1, true, 2, false ]

myTuple.unshift(0, false);
console.log(myTuple);
// output: [ 0, false, 1, true, 2, false ]

// myTuple = [3];
// [ts] Property '1' is missing in type '[number]' but required in type '[number, boolean]'. [2741]

myTuple.push(33); 
console.log(myTuple);
// output: [ 0, false, 1, true, 2, false, 33 ]
// This is a problem because, Type checking isn't done here. A push method on a tuple ensures that type checking can be by-passed. 

// ------- TYPING WITH FUNCTIONS ------- //
// We can statistically declare the function that adds two numbers and prevent users from sending in a 'string' as an argument.
// Declaring the types of the parameters of the function -- Similar to declaring the types of variables. 

var number1: number;
var number2: number;

// function addition (number1, number2) {
//     return number1 + number2;
// }

// var sum = addition(1, 3);
// console.log("Sum: " + sum);

// output: Sum: 4


function additionOfTwoNumbers (number1: number, number2: number) {
    return number1 + number2;
}

console.log("Sum of Two numbers: " + additionOfTwoNumbers(3, 5));
// output: Sum of Two Numbers: 8

// console.log("Sum of Two Elements (String + Number): " + additionOfTwoNumbers("Hello", 23));
// [ts] Argument of type '"Hello"' is not assignable to parameter of type 'number'. [2345]
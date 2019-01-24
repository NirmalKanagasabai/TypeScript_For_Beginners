var normalFunction = function () {
    return Response;
};
// ------- ARROW FUNCTION ------- //
var arrowFunction = function () { return 'response'; };
// TypeScript allows type-declaration
// TypeScript is a strongly-typed language
// Ensures that a type-declaration is done i.e., given a variable, we can declare what type the variable is. 
// a = true;
// hello-world.ts:14:1 - error TS2322: Type 'true' is not assignable to type 'number'.
// All primitive JS types are valid TS types too. 
// ------- TYPE DECLARATION ------- //
var a;
var b;
var c;
a = 100;
b = true;
c = "Hello";
// ------- PREFIX (Java) vs. POSTFIX DECLARATION (TypeScript) ------- //
// PREFIX: In Java, the declaration of the type of the variable is done before it. For example, it is, 'int a', 'float b', 'String c', etc.
// POSTFIX: In TypeScript, the declaration of the type of the variable is done after it. 
// Let us take a look at the other two primitive data types in JavaScript. 'Symbol' is ignored for now. 
// - Undefined & Null
// It is importantt to note that these two primitive data types have only one value each - undefined and null respectively. 
var foo;
// However, we don't really declare the types of undefined and null. We let TypeScript handle them implicitly. The above example is shown for illustrative purposes. 
// ------- ARRAY DECLARATIONS ------- //
// First of all, we need an array and nothing other than an array. 
// Secondly, we need to ensure what is the type of elements that are going to be added to the array.
var myNumberArray;
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
var myTuple;
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
var number1;
var number2;
// function addition (number1, number2) {
//     return number1 + number2;
// }
// var sum = addition(1, 3);
// console.log("Sum: " + sum);
// output: Sum: 4
function additionOfTwoNumbers(number1, number2) {
    return number1 + number2;
}
console.log("Sum of Two numbers: " + additionOfTwoNumbers(3, 5));
// output: Sum of Two Numbers: 8
// console.log("Sum of Two Elements (String + Number): " + additionOfTwoNumbers("Hello", 23));
// [ts] Argument of type '"Hello"' is not assignable to parameter of type 'number'. [2345]
// ----- VARIABLE ARGUMENTS ----- // 
// i.e., The number of arguments to functions in JavaScript does not have to match the function signature. 
// One can pass more or lesser arguments than what's declared in the function and it still works. 
// If there are more arguments passed, they are ignored (basically, present in Arguments argument)
// If there are less arguments passed, the missing ones are treated as 'undefined'.
// additionOfTwoNumbers(3);
// [ts] Expected 2 arguments, but got 1. [2554]
// 0_Introduction.ts(119, 49): An argument for 'number2' was not provided.
// This doesn't work in TypeScript. The default behaviour is, 'the number of arguments have to match'.
// TypeScript enforces that the argument counts in function calls exactly match the function signature. 
// What if the number of arguments that you wanna send needs to be flexible?? How to handle this situation??
// TypeScript does have a feature that lets you add variable arguments. 
function calculateSum(number1, number2, number3) {
    return number1 + number2 + number3;
}
console.log(calculateSum(3, 5));
// output: NaN (This is because, number3 is marked as undefined...)
console.log(calculateSum(3, 5, 7));
// output: 15
// ----- OPTIONAL ARGUMENT -----
// It is to be noted that number3 is followed by a '?'. This means to say that it is an optional argument. 
// The function call will still be made with just two arguments without any error being thrown. Unfortunately, our calculation involes the third argument. If not, it works just fine. 
// P.S.: It is mandatory to have the optional arguments at the end. It cannot work in the beginning or the middle.
// ----- DEFAULT VALUE OF OPTIONAL ARGUMENT -----
function calculate(number1, number2, number3) {
    if (number3 === void 0) { number3 = 0; }
    return number1 + number2 + number3;
}
console.log(calculate(3, 5));
// output: 8
console.log(calculate(3, 5, 7));
// output: 15
// The declaration number3 = 0 means to say that this argument is just optional. It isn't needed. If it isn't specified, take the value '0'. If not, try to use the value provided. 
// An quivalent function is this:
function calculateEquivalent(number1, number2, number3) {
    if (number3 === undefined) {
        number3 = 0;
    }
    return number1 + number2 + number3;
}
console.log(calculateEquivalent(3, 5));
// output: 8
// If '?' is missing
// -----------------
//   0_Introduction.ts:175:49
//   175 function calculateEquivalent (number1, number2, number3) {
//                                                       ~~~~~~~
//   An argument for 'number3' was not provided. 
console.log(calculateEquivalent(3, 5, 7));
// output: 15
// How to specify an argument as optional and type it?
function dummyFunction(item) {
    console.log("Specifying an argument as optional and type declaring it.");
}
// How to specify an argument as optional and assign a default value and still type it?
function yetAnotherDummyFunction(item) {
    if (item === void 0) { item = 0; }
    console.log("It is to be noted that the ? is removed. Also, the typing is first done and then the default value is specified.");
}
// Alright, now that the type declarations are done for the function arguments, also, the method signature needs to be obeyed.
// How can one enforce what is the return type of a function? Is there a way to do it?
// ----- TYPING THE RETURN TYPE OF THE FUNCTION ----- //
function concatenateString(word1, word2, word3) {
    if (word3 === void 0) { word3 = "."; }
    return word1 + word2 + word3;
}
console.log("String Concatenation: " + concatenateString("Hello", " World"));
// output: String Concatenation: Hello World.
// ----- IMPLICIT TYPING ----- //
// Though we haven't declared the type of the variables, TypeScript understands the value that is assigned to it and then assumes it to be the type.
// This ensures that when a value of different type is assigned to the variable, TypeScript warns the developers of the same. 
// This process is called, 'Implicit Typing'.
var m = 10;
var n = true;
var o = "Hello";
// m = false;
// [ts] Type 'false' is not assignable to type 'number'. [2322]
// If you don't explicitly declare a variable type, but you assign a value with the declaration, TypeScript IMPLICITLY assumes the type from the value being assigned!
var myStringArray = ["Hello", "World", "How", "Are", "You"];
// myStringArray = [30, 40];
// [ts] Type 'number' is not assignable to type 'string'. [2322]
function normalTyping() {
    return "Good Morning";
}
var greeting = normalTyping();
console.log(greeting);
function checkImplicitTyping() {
    return "Good Morning";
}
var greeting = checkImplicitTyping();
console.log(greeting);
// Looking at the return value, TypeScript implicitly assumes what the return type of the function needs to be. 
// What is the declaration of a variable is on two lines? Will TypeScript still do Implicit Typing?
var greetingError; // Type: any
greetingError = normalTyping(); // Type: string
greetingError = 100; // Type: number
// In the above example, TypeScript doesn't complain. 
// This is mainly because, the declaration and the assignment needs to be done on the same line (the very first time the declaration is being done) so that the TypeScript does the Implicit Typing. 
// ----- DATA TYPE - ANY ----- //
// In order to provide the flexibility of switching the types later on (just like JS does), TypeScript introduced the ANY data type
// Basically, when a variable is declared as 'ANY', the developer informs the TypeScript to ignore any type checking for the corresponding variable
var anyDataType;
var anyDataType2;
// [ts] Variable 'anyDataType2' implicitly has an 'any' type, but a better type may be inferred from usage. [7043]
anyDataType = 10;
anyDataType = "Hello";
anyDataType = false;
anyDataType2 = 20;
anyDataType2 = "World";
anyDataType2 = true;
// ------ DATA TYPE - UNION ----- //
// When you have a certain limited type that you want to assign to a variable, we can use 'Union' instead of 'Any'.
// Using 'Any' can make the code too loosely-typed. To make it a bit more strong, we can make use of 'Union'.
var unionDataType;
// The above assignment means that the variable unionDataType can either take a number or a boolean value and not anything else.
// Let us try assigning a string value to it.
unionDataType = 100;
unionDataType = false;
// unionDataType = "Hello";
// [ts] Type '"Hello"' is not assignable to type 'number | boolean'. [2322]
var unionDataType2;
unionDataType2 = 10000;
unionDataType2 = true;
unionDataType2 = "Newww";

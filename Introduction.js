var normalFunction = function () {
    return Response;
};
// Arrow Functions
var arrowFunction = function () { return 'response'; };
// TypeScript allows type-declaration
// TypeScript is a strongly-typed language
// Ensures that a type-declaration is done i.e., given a variable, we can declare what type the variable is. 
// a = true;
// hello-world.ts:14:1 - error TS2322: Type 'true' is not assignable to type 'number'.
// All primitive JS types are valid TS types too. 
var a;
var b;
var c;
a = 100;
b = true;
c = "Hello";
// PREFIX (Java) vs. POSTFIX DECLARATION (TypeScript)
// PREFIX: In Java, the declaration of the type of the variable is done before it. For example, it is, 'int a', 'float b', 'String c', etc.
// POSTFIX: In TypeScript, the declaration of the type of the variable is done after it. 
// Let us take a look at the other two primitive data types in JavaScript. 'Symbol' is ignored for now. 
// - Undefined & Null
// It is importantt to note that these two primitive data types have only one value each - undefined and null respectively. 
var foo;
// However, we don't really declare the types of undefined and null. We let JavaScript handle them implicitly. The above example is shown for illustrative purposes. 

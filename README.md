# TypeScript_For_Beginners

- What is TypeScript? Why was it developed?
- Language Features - Types
- Core Concepts (Syntax and Principles) - Classes and Interfaces
- End-to-End application

What is TypeScript? Why was it developed? 
-----------------------------------------
> A free & open-source programming Language that was created and maintained by Microsoft. It attempts to address / tackle the quirks and weirdness in the JavaScript (which was developed years ago). 

**Problems with JavaScript:**
- Typing: Lack of System (No type-checks) and no enforcement of typing
- Function arguments: When the number of arguments passed to a function is less, it assumes the missing arguments as 'undefined;. This default functionality, though it works fine, doesn't help much as the developers cannot work on 'undefined' elements. 
- Structure of Objects: How can the developers prevent others from adding new properties to an existing object? The loosely structured objects in JS is a big problem as there is no system in place to handle this issue.
- Application Complexity: Currently, the code bases has 1000s of 1000s of code. The applications are quite complex. 

**Why would developers resort to JavaScript if it has so many problems?**
- Because, JS is the only programming language that is capable of creating dynamic web pages. i.e., the only browser-supported language that can edit the DOM tree and display the information dynamically. 

HTML -> [Browser] -> Static DOM Tree

JS + HTML -> [Browser] -> DOM Tree <which can be altered dynamically>
  
In order to get around this problem, we are going to make use of 'COMPILATION'. This approach has been around on all high-level programming languages. Irrespective of whichever platform you want to run the application on, you can use the high-level language (say, Java) to create the application. Once compiled, it converts the high-level code to Java Byte code which can be further converted to machine-level code. 

** Solution **

TypeScript -> [Transpilation] -> JS -> [Browser] -> Dynamic DOM Tree

The TypeScript Compiler converts the TypeScript into JavScript. This process is called, 'TRANSPILATION'. The first phase, TypeScript -> JavaScript happens during 'Development Time'. From then on, it happens during 'Runtime'. Running TypeScript compilation on browsers is possible. Unfortunately, it is very inefficient!




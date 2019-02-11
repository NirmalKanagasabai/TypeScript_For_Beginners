/* -------------------------------
* |   CLASSES AND INTERFACES     |
*  -------------------------------
*/
// ----- CLASS DEFINITION ----- //
var Person = /** @class */ (function () {
    // Constructor
    function Person() {
        this.firstName = " ";
        this.lastName = " ";
    }
    // Methods
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// Creating an instance of the class
var aPerson = new Person();
// Without any constructor, 'aPerson' would be empty.
// As there are two member variables, now, 'aPerson' object would have two properties which can be accessed using the 'Dot' notation.
// Assigning values to the variables
aPerson.firstName = "Nirmal";
aPerson.lastName = "Kanagasabai";
console.log(aPerson.firstName);
// output: Nirmal
console.log(aPerson.lastName);
// output: Kanagasabai
// Printing the entire object
console.log(aPerson);
// output: Person { firstName: 'Nirmal', lastName: 'Kanagasabai' }
// ----- TYPE DECLARATION IN CLASSES ----- //
// In TypeScript, we can do a type declaration to 'Classes' too. 
// For example, we can restrict the variable 'bPerson' to only contain the instances of 'Person' classes.
// It is to be noted that the variable 'bPerson' is typed to contain only 'Person' class instances.
var bPerson = new Person();
// Assigning values to the variables
bPerson.firstName = "Nirmal";
bPerson.lastName = "Kanagasabai";
console.log(bPerson.firstName);
// output: Nirmal
console.log(bPerson.lastName);
// output: Kanagasabai
// Printing the entire object
console.log(bPerson);
// output: Person { firstName: 'Nirmal', lastName: 'Kanagasabai' }
// ----- IMPLICIT TYPE DECLARATION IN CLASSES ----- //
// Similar to what we saw in JavaScript, as the declaration and assignment is done on the same line, there is no real need to type declare the corresponding variable 'cPerson'.
// It is to be noted that the variable 'bPerson' is typed to contain only 'Person' class instances.
var cPerson = new Person();
// Assigning values to the variables
cPerson.firstName = "Nirmal";
cPerson.lastName = "Kanagasabai";
console.log(cPerson.firstName);
// output: Nirmal
console.log(cPerson.lastName);
// output: Kanagasabai
// Printing the entire object
console.log(cPerson);
// output: Person { firstName: 'Nirmal', lastName: 'Kanagasabai' }
console.log(cPerson.getFullName());
// ----- TYPE DECLARATION ON MEMBER VARIABLES (PROPERTIES) ----- //
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
// ----- TYPE DECLARATION ON MEMBER VARIABLES (PROPERTIES) ----- //
var Student = /** @class */ (function () {
    // Parameterized Constructor
    function Student(id, name) {
        this.studentID = id;
        this.studentName = name;
    }
    // Member Functions (Methods)
    Student.prototype.getStudentNameAndID = function () {
        return "Student ID: " + this.studentID + " " + "Student Name: " + this.studentName;
    };
    return Student;
}());
// Creating an instance of the class 'Student'
var studentObject = new Student(1, "Nirmal");
console.log("Student Object: " + studentObject);
console.log(studentObject.getStudentNameAndID());

//1) ts datatypes
//2) type alias & type assertion
//3) enum & object literal
//4) class
//5) constructors
//6) access modifiers

// Q1. How does TypeScript determine the data type of a variable when no type is not mentioned?
// A1. TypeScript uses type inference to determine the data type of a variable when no type is explicitly mentioned. It analyzes the value assigned to the variable and infers its type based on that value. For example, if you assign a number to a variable, TypeScript will infer that the variable is of type 'number'.
// var num = 42; // TypeScript infers 'num' as type 'number'
// var str : string = "Hello"; // TypeScript infers 'str' as type 'string'

//Q2. How does datatype `any` differ from `unknown` in TypeScript?
// A2. The `any` type allows you to bypass TypeScript's type checking, meaning you can assign any value to a variable of type `any` and perform any operations on it without compile-time errors. On the other hand, the `unknown` type is a more restrictive type that indicates that a variable could hold a value of any type, but you must perform type checking or type assertion before you can use it in a way that's specific to a particular type. This makes `unknown` safer than `any` because it forces you to be more explicit about handling the value.

// Q3. what is type assertion in TypeScript and how is it used?
// A3. Type assertion in TypeScript is a way to tell the compiler that you know the type of a variable better than it does. It allows you to override the inferred type and specify a more specific type for a variable. Type assertions do not perform any runtime checks or conversions; they are purely a compile-time construct. You can use type assertions in two ways: using the angle bracket syntax or the `as` keyword.
var response: unknown = "status code: 200";
//response.toUpperCase() // Error: Object is of type 'unknown'.
// To use the value as a string, you can assert its type:
var str = response as string;
str.toUpperCase();

// Q4. What is the difference between `enum` and `object literal` in TypeScript?
// A4. An `enum` in TypeScript is a special data type that allows you to define a set of named constants, which can be either numeric or string values. Enums provide a way to group related values together and give them meaningful names, making the code more readable and maintainable. On the other hand, an `object literal` is a way to define an object with key-value pairs, where the keys are strings and the values can be of any type. While both enums and object literals can be used to represent a collection of related values, enums are more suitable for cases where you want to define a fixed set of named constants, while object literals are more flexible and can hold dynamic data.

// Q5. What is type alias in TypeScript and how is it used?
// A5. A type alias in TypeScript is a way to create a new name for an existing type. It allows you to define a custom type that can be used throughout your code, making it easier to read and maintain. Type aliases can be used for primitive types, union types, intersection types, and more complex types like objects and arrays. You can create a type alias using the `type` keyword followed by the name of the alias and the type definition. For example:
// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

type browser = "Chrome" | "Firefox" | "Safari" | "Edge";

function browserCheck(browser: browser) {
  console.log(`The selected browser is: ${browser}`);
}
browserCheck("Chrome"); // Valid
//browserCheck("Opera"); // Error: Argument of type '"Opera"' is not assignable to parameter of type 'browser'.

// intersection type
type Admin = {
  id: string;
  name: string;
  email: string;
  role: string;
};
type User = {
  isActive: boolean;
};
 type AdminUser = User & Admin;

 let adminUser: AdminUser = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Administrator",
  isActive: true
 };
 // uses case of intersection type and union type


// Q6. What are different between `public`, `private`, and `protected` access modifiers in TypeScript?
// A6. In TypeScript, access modifiers are used to control the visibility and accessibility of class members (properties and methods). There are three main access modifiers: `public`, `private`, and `protected`.
// - `public`: Members marked as public are accessible from anywhere, both inside and outside the class. By default, all class members are public if no access modifier is specified.
// - `private`: Members marked as private are only accessible within the class they are defined in. They cannot be accessed from outside the class or by derived classes.
// - `protected`: Members marked as protected are accessible within the class they are defined in and by derived classes (subclasses). However, they cannot be accessed from outside the class hierarchy.

// Q7. How the reuse of code is achieved in TypeScript using class and inheritance?
// A7. In TypeScript, code reuse is achieved through the use of classes and inheritance. A class can define properties and methods that can be shared among multiple instances of that class. Inheritance allows a class (called a subclass or derived class) to inherit properties and methods from another class (called a superclass or base class). This enables the subclass to reuse the code defined in the superclass, while also allowing it to add its own properties and methods or override existing ones. By using inheritance, developers can create a hierarchy of classes that share common functionality, reducing code duplication and promoting maintainability.
// Example: syntax to create an objecct of class and inheritance
// new keyword is used to create an object of class and extends keyword is used to inherit the properties and methods of parent class to child class
// consturctor is used to initialize the properties of class and super keyword is used to call the constructor of parent class from child class

// Q8. what is constructor in TypeScript and how is it used?
// A8. In TypeScript, a constructor is a special method that is used to initialize the properties of a class when an object of that class is created. The constructor is defined using the `constructor` keyword and can take parameters to set the initial values of the class properties. When an object is instantiated using the `new` keyword, the constructor is automatically called, allowing you to set up the object's state. Constructors can also be used in derived classes to call the constructor of the base class using the `super` keyword, ensuring that the base class properties are properly initialized.

class Person {
  name: string;// global property declaration
  constructor() {// auto initialization of name property
    this.name = "bhuvanesh";
  }
    greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
new Person().greet(); // Output: Hello, my name is bhuvanesh

// Q9. What is the significance of optional parameter in typescript?
// A9. In TypeScript, optional parameters are parameters that are not required to be passed when calling a function or constructor. They are denoted by a question mark (`?`) after the parameter name and type. Optional parameters allow for more flexible function signatures, enabling callers to omit arguments that have default values or are not applicable in certain scenarios. This enhances code reusability and reduces the need for multiple function overloads.
// Example:
function greet1(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  } else {
    console.log(`Hello, my name is ${name}.`);
  }
}
greet1("Alice"); // Output: Hello, my name is Alice.
greet1("Bob", 30); // Output: Hello, my name is Bob and I am 30 years old.

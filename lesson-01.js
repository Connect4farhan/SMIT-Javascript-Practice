// console.log("operators in js");

// "use strict";

// //  	Description
// // 1	()	Parentheses
// // 2	**	Exponentiation
// // 3	*, /, %	Multiplication, Division, Remainder
// // 4	+, -	Addition, Subtraction

// // Associativity in Math Operators
// // Operators that have the same precedence are evaluated according to their associativity:

// // Left-to-right associativity: Operators like +, -, *, / are evaluated from the left.
// // Right-to-left associativity: The exponentiation operator ** is evaluated from the right.

// var a = 10;
// var b = 4;

// //------Addition-------
// console.log("a + B = ", a+b)

// //------Subtraction-------
// console.log("a - B = ", a-b)

// //------Division-------
// console.log("a / B = ", a/b)

// //------Multiplication-------
// console.log("a * B = ", a*b)

// //------Exponentiation-------
// console.log("a ** B = ", a**b)

// //------Remainder-------
// console.log("a % B = ", a%b)

// //------Addition-------
// console.log("++a = ", ++a)
// console.log("a++ = ", a++)  
// console.log("--a = ", --a)
// console.log("a-- = ", a--)
// console.log("a = ", a)
// console.log("a-- = ", a--)
// console.log("--a = ", a--)
// console.log("a = ", a)


// //------Exponent-------

// var num1 = 2 * 2 + 6;
// console.log(num1);


// var num2 = 2 * (2 + 6);
// console.log(num2);


// var num3 = 6 / 2 + 2 ** (2 ** 2) + 2 * 6;
// console.log(num3);


// var num4 = 6 / 2 + 2 ** 4 + 2 * 6;
// console.log(num4);


// var num5 = 6 / 2 + 16 + 2 * 6;
// console.log(num5);


// var a = "30";
// var b = Number.MAX_SAFE_INTEGER;
// console.log(b)
// console.log(+a + b);
// console.log(parseInt(a) + b);


// // ------Variable Overwrite--------

// var firstName = "Farhan"
// firstName = "Ahmed"
// console.log(firstName);

// // String, number, Boolean (premetive types) 

// var name = "Muhammad Umair";
// console.log(name);
// console.log(typeof name);
// console.log('---------------------')

// var marks = 80;
// console.log(marks)
// console.log(typeof marks)
// console.log('---------------------')

// var pass = false
// console.log(pass)
// console.log(typeof pass)
// console.log('---------------------')


//.....Variable Names Legal and Illegal......

// var 1firstName = "Muhammad" // F
// var *firstName = "Muhammad" // F
// var $firstName = "Muhammad" // T
// var _lastName = "Umair" // T

// console.log($firstName, _lastName)
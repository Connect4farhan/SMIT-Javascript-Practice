//----------********** Non Primitive Data Types **********----------

//---------------------
//****** array ********
//---------------------

var marks =[10, 20, 30, 40 ,50];


// marks.unshift(10);
// marks.shift();
// marks.push(1000);
// marks.pop(1000);
// marks.splice(2, 0, "Lemon", "Kiwi" );
// marks.slice(1);
// marks.toString();


//--(01)--//The length property returns the length (size) of an array:
// console.log(marks.length); 

//--(02)--//The typeof property returns the type of variable:
// console.log(typeof marks);



//--(03)--//The push() method adds a new element to an array (at the end):
// marks.push(1000);
// console.log(marks);



//--(04)--//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// marks.unshift(1000);
// console.log(marks);


//--(05)--//The shift() method removes the first array element and "shifts" all other elements to a lower index.
// marks.shift();
// console.log(marks);


//--(06)--//The pop() method removes the last element from an array:
// marks.pop();
// console.log(marks);

//--(07)--//The JavaScript method toString() converts an array to a string of (comma separated) array values.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());


//--(08)--//The splice() method can be used to add new items to an array:
// marks.splice(2, 0, "Lemon", "Kiwi" );
// console.log(marks);


//--(09)--//The slice() method slices out a piece of an array into a new array:
// marks.slice(1);
// console.log(marks);


// //----------------****************~~~~~~~Loops~~~~~~~~****************--------------------


// // *******~~~~for loops~~~~*********
// debugger
// for(var i = 1; i <=10; i++){
//     console.log(`2 * ${i} = ${i*2}`);
//     document.write(`2 x ${i} = ${i*2} <br/>`);
// }



// // debugger
// // //first iteration
// i = 0 // 0
// 0 < 3 // true
// 0

// // //second iteration
// i = 1 // 1
// 1 < 3 // true
// 1

// // //third iteration
// i = 2 // 2
// 2 < 3 // true
// 2

// // //fourth iteration
// i = 3 // 3
// 3 < 3 // true
// 3 

// // //fifth iteration
// i = 4 //4
// 4 < 3 // fasle

// console.log(i);


// //--------------------------------------------------------------------------
// // -------~~~~~**** post Increament / pre Increment ****~~~~~----------

// var num = 5;
// console.log(`num value is = ${num}`);
// var result = num + 1;
// console.log(`add 1 in num value is  = ${result}`);
// var result = num++;
// console.log(` apply 1++ post increment value is = ${result}`);
// console.log(`value of num = ${num}`);

// var result = ++num;
// console.log(`apply ++1 pre increment value is  ${result}`);
// console.log(`value of num = ${num}`);


// // ------------------------------------------------------------------------------
// // -------~~~~~**** Grade Sysytem ****~~~~~----------



// var marks = prompt("Enter a Number");

// if (marks >= 90 && marks <= 100){
//     console.log("A Grade");
// } else if (marks >=80 && marks <= 89){
//     console.log("B Grade");
// } else if (marks >=70 && marks <= 79){
//     console.log("C Grade");
// } else if (marks >=60 && marks <=69){
//     console.log("D Grade");
// } else if (marks > 100){
//     console.log("Invalid marks");
// } else {
//     console.log("Fail")
// }
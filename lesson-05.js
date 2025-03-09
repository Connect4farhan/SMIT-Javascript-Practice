//----------********** Data Modeling **********----------


var product = {
  id: 101,
  title: "wirless headphonephone ",
  variations: [
    { id: 1, color: "black", price: 500, quantity: 4 },
    { id: 2, color: "red", price: 1000, quantity: 2 },
    { id: 3, color: "green", price: 1500, quantity: 1 },
    { id: 4, color: "gold", price: 2000, quantity: 10 },
  ],
};

// console.log(product.variations[1].price);
// console.log(product.variations.length)

// //----------------------------------------------------------------------
// // How calculate Product total quantity & average?

// var totalQuantity = 0;
// for (var i = 0; i < product.variations.length; i++) {
//   console.log(product.variations[i])
//   totalQuantity = totalQuantity + product.variations[i].quantity;
// }

// var avg = totalQuantity / product.variations.length;

// console.log(totalQuantity);
// console.log(avg);

// //------------------------------------------------------------------------
// // How calculate Product total price ?

// var totalPrice = 0;
// for ( var i = 0; i < product.variations.length; i++) {
//     console.log(product.variations[i])
//     totalPrice = totalPrice + product.variations[i].price;
// }

// console.log(`Total Price ${totalPrice}`);

// //------------------------------------------------------------------------
// // How calculate Product available color ?


// var product = {
//   title: "Wireless Headphones",
//   price: 1000,
//   quantity: 10,
//   color: ['black', 'red', 'green']
// };

// for(var i = 0; i < product.color.length; i++){
//     console.log(product.color[i])
// }


// //-------------------------------------------------------------------------
// // How sum an array value ?


// var marks = [4, 6, 8, 20]; // 4 length

// var sum = 0
// for (var i = 0; i < marks.length; i++) {
//     // i -> 0
//     // 1- 0 + 4 = 4
//     // 2- 4 + 6 = 10
//     // 3- 10 + 8 = 18
//     // 4- 18 + 20 = 38
//     sum = sum + marks[i]
// }

// var avg = sum / marks.length
// console.log(`Total Marks ${sum}`);
// console.log("avg: " + avg);


// //-------------------------------------------------------------------------
// //--------********** Non Primitive Data Types **********----------

//----------------------------------------------------------------------------
// //         ****************** Object **************
// //-------------------------------------------------------------------------


var students = [
  {
    id: 101,
    name: "ali",
    marks: 80,
    pass: true,
  },
  {
    id: 102,
    name: "ahmed",
    marks: 30,
    pass: false,
  },
  {
    id: 103,
    name: "zubair",
    marks: 90,
    pass: true,
  },
];

console.log(students[0].id + "  " + students[0].name + "  " + students[0].pass);
console.log(students[1].id);
console.log(students[2].id);
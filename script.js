//! CREATE FIZZBUZZ CODE HERE


//let number = 0

//! USING IF ELSE STATEMENT

// while (number <= 100){
//     if( number % 15 === 0){
//         console.log("Fizzbuzz")
//     }
//     if(number % 3 === 0 ){
//         console.log("Fizz")
//     }
//     if(number % 5 === 0){
//         console.log("Buzz")
//     }
//     console.log(number)
//     number ++
// }

//! USING SWITCH STATEMENT

// while (number <= 100){
//    switch(true){
//     case (number % 15 === 0):
//         console.log("Fizzbuzz")    
//     break
//     case number % 3 === 0:
//         console.log("Fizz")    
//     break
//     case number % 5 === 0:
//         console.log("Buzz")    
//     break
//     default: 
//         console.log(number)
//     break
//    }
//     number ++
// }


const fruits = ["apple","orange","banana","pineapple"]

// const str = "My dog name is Rex."
// console.log("split ",str.split(' '))
// console.log("split ",str.split(''))


//! remove letter 'a' from a String or an Array
let stringFruits='';
for (let i = 0; i <fruits.length; i++) {
    stringFruits = stringFruits+=fruits[i]
}
// string
console.log("original string", stringFruits)

//! USING REGEX
// let newString=stringFruits.replace(/a/g,'A')
// let newArray=[]
// console.log("new array", newArray)

// for (let i = 0; i <fruits.length; i++){
//     newArray.push(fruits[i].replace(/a/g,''))
// }
// console.log("array without "+'a', newArray)


//! USING FOR LOOP
// const newString = stringFruits.split('')
// console.log("string ",newString);


// for(let i = 0; i < newString.length; i ++){
//   if (newString[i] === 'a') {
//     newString.splice(i, 1)
//     --i
// }
// }
// console.log("string ",newString.join(""));

//! USING WHILE LOOP
// let newString = stringFruits.split("");
// console.log("original string", newString)

// let counter = 0;

// while (counter < newString.length) {
//    newString[counter] === 'a' ? newString.splice(counter, 1) : counter++;
// }

// console.log("string ",newString.join(""));


//! Other methods to use on strings and arrays like push, unshift, splice, slice, join
// console.log(fruits)

// console.log("string", stringFruits)

// console.log("string", stringFruits.split(""))

// fruits.join(",")

// console.log(fruits[fruits.length-1])

// fruits.push("mango")

// fruits.unshift("peach")

// console.log(fruits)

// fruits.splice(2,3,"melon")

// const copyFruits = fruits.slice(1,3)
// const completeCopy = fruits.slice()

// console.log("fruits ",fruits)

// console.log("copyFruits ",copyFruits)

// console.log("join: ",copyFruits.join(' '))

// console.log("join: ",copyFruits.join(''))

// console.log("join: ",copyFruits.join())

// console.log("completeCopy",completeCopy)










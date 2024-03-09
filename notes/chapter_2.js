// variable declaration
const sentence = 'hello everyone' // const cannot be redeclared, cannnot be reassigned, has block scope

let number_of_eggs = 3 // let cannot be redeclared, can be reassigned, has block scope

number_of_eggs = 8 // number_of_eggs will now be 8 because it has been reassigned

let total_groceries = number_of_eggs // assignment by reference

473673485 // integer

'hello world' // string

true // boolean
false // boolean

null // absence of value
undefined // absence of value

let friends = { 
    james: 'is super cool',
    lucy: 'isn\'t so cool',
    number_of_eggs: 3
} // dictionary (key value pairs) or object

let example_array = [1, 2, 3, 4, 5] // array

// print statement
console.log(friends.james)

function myFirstFunction (value, secondValue) {
    // multiplies two numbers
    console.log(value * secondValue)
}

let multiplyTwoNumbers = myFirstFunction // reassigning the function to a new variable

multiplyTwoNumbers(3, 5) // call the function
multiplyTwoNumbers(4, 6) // call the function
multiplyTwoNumbers(5, 5) // call the function

let condition1 = true
let condition2 = false

// && AND || OR ! NOT

console.log(condition1 && condition2) // false
console.log(condition1 || condition2) // true
console.log(!condition1) // false
console.log(!condition2) // true

console.log(typeof sentence) //typeof checks the type of the variable

// If statements
if (condition2) { // false as conidtion2 is false
    console.log('Hi mum')
} else if (condition1 && condition2) { // false as condition2 is false
    console.log('Hi grandma')
} 
else {
    console.log('Hi dad')
}

let new_array = [1, 5, 4 , 3, 2, 654, 12, 543] // array

let i = 0
let length = new_array.length // length of the array is 8

// while( i < length) { // while loop: while loops have 1 argument passed in
//     console.log('value at ', i, ' is ', new_array[i])
//     i++
// }

// for (let j = 0; j < length; j++ ) { // for loop: they allow for multiple arguments to be passed in
//     console.log('value at ', j, ' is ', new_array[j])
// }

// for (let j = 0; j < length; j++ ) { // check if j is equal by doing remainder division by 2 and checking if the remainder is 0
    
//     if (j % 2 === 0) {
//         continue // skip the rest of the loop and go to the next iteration
//         //break // break out of the loop
//     }
//     console.log('value at ', j, ' is ', new_array[j])

// }

function addStrings(string1 = 'default1', string2 = 'default2') {
    
    let concatString = string1 + ' ' + string2 // concatenation of two strings
    console.log(concatString)
    return concatString // return will exit the function and return the value

}

addStrings('hello', 'mum')

let newString = addStrings('hello')

console.log('The new string is: ', newString)

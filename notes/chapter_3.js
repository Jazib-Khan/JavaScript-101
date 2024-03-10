
//const { addStrings, example_array } = require('./chapter_2') // import the addStrings function and example_array from chapter_2.js

let example_sentence = 'this_is_a_string'

let string_length = example_sentence.length

let simple_array = [1, 4, 2, 13, 5] // 1 dimensional array

// indexOf() returns the position of the first occurence of a value
let index_of_four = simple_array.indexOf(13) //  returns 3 as 13 is at position 3

// slice extracts a section of an array and returns a new array
let start_array = simple_array.slice(0, index_of_four) // returns [1, 4, 2] as it starts at position 0 and ends at position 3

let end_array = simple_array.slice(index_of_four + 1) // returns [5] as it starts at position 4 and ends at the end of the array

let new_filtered_array = start_array.concat(end_array) // returns [1, 4, 2, 5] as it combines the start_array and end_array


const bio = {
    name: 'John',
    age: 25,
    hobbies: ['gym', 'coding', 'reading'],
    friends: {
        'james': {
            description: 'is super cool'
        }
    }
}

console.log('joke' in bio) // returns false as joke is not in the bio object
console.log('name' in bio) // returns true as name is in the bio object

function helloWorld() {
    let sentence = 'Hello world'
    console.log(sentence)
}

function counter() { // recursive function that counts the number of times it has been called
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

let increment = counter() // increment is now a function that increments the count variable

increment() // 1
increment() // 2

const broken_object = {
    word: 'nice'
}

console.log(broken_object.word) // returns nice

function problematicCodeBlock() {
    try {
        console.log('Attempted the try block')
        const sub_object = broken_object.hello.world // returns an error as hello is not defined
        console.log(sub_object)
    } catch (err) {
        console.error(err.message)
    }
}

problematicCodeBlock() // returns 'broken_object.hello is undefined'

function throwError() {
    try {
        throw new Error('custom error message')
    } catch (err) {
        console.log(err.message)
    }
}

throwError()
console.log('code continued to exectue')
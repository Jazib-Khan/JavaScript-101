const myFunction = (input) => {
    console.log('Exectued function')
}

let friends = ['Lucy', 'Greg', 'Janice'] // array of strings

// Ternary operator ? : is a conditional operator that returns one of two values based on the result of an expression

// includes method returns true if the array contains the specified element, and false otherwise
let isJaniceFriend = friends.includes('Janice') ? true : false // true if Janice is a friend, false otherwise

console.log(isJaniceFriend)

const james = {
    hobbies: {
        skiing: {
            pairs_of_skis: 1
        }
    }
}

console.log(james?.['hobbies']?.football?.pairs_of_boots) // undefined

// object destructuring
let person = {
    name: 'James',
    age: 25,
}

const { name: person_name, age } = person // destructuring assignment

console.log(person_name, age) // James 25


const sleep = ms => new Promise(r => setTimeout(r, ms)); // sleep function to simulate async operations
// A promise is an object representing the eventual completion or failure of an asynchronous operation

async function fetchData() { // an async function is a function that returns a promise
    try {
        // await keyword pauses the execution of the async function until the promise is resolved or rejected
        const res = await fetch('https://dummyjson.com/products/1') // fetch is a web API to make requests
        const data = await res.json() // json method returns a promise that resolves with the result of parsing the body text as JSON
        console.log(data) // { id: 1, name: 'Product 1', price: 100 }
    } catch (error) {
        console.error(error)
    }

}

fetchData() // { id: 1, name: 'Product 1', price: 100 }
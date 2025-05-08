

// async function

// Async is a keyword that is used before a function to create a async function.

// 1. async function -> 
// always return a promise either return a promise for a function. then it will be completely fine.
//2. if don't return a promise from it. if return a value this function automatically rap this value inside a promise it will return a promise.
//3. await -> it's a keyword that can only be used a async function.


// async function fetchapi(){
//     console.log("welcome to fetch api");
//     const promise = new Promise((resolve,reject)=>{
// const success = true;
// if(success)
// {
//     resolve("promise resolved");
// }
// else{
//     reject("promise rejected");
// }
//     })
//    console.log(promise);
// const promise2 = "new promise";
//    console.log(promise2);

//    return promise2;
// }
// console.log(fetchapi());


async function fetchUsers(){
    const url ="www.url.com";
    try{
        const response = await fetch(url);
       
        if(!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users =  await response.json();

        let container = document.getElementById("user-list");


users.forEach( user => 
    let usercard = `<div class="col-md-4">
    <div class="card shadow-sm">
        <div class="card-body">
            <h5>Name: </h5>
            <p class="card-text">
                <strong>Email:</strong> <br>
                <strong>Phone:</strong><br>
                <strong>City:</strong><br>
                </p>
        </div>
    </div>
</div>
    
    
    `
 )
    }
}

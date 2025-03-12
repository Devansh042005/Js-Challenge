// ADVANCED JS
// IIFE (Immediately Invoked Function Expression)
async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("45");
        }, 3500)
    })
}
(async function(){
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})();

//De-structuring
let [x,y,...rest] = [1,2,3,4,5,6,7,8,9];
console.log(x,y,rest);  

// here x= 1, y=2, rest = [3,4,5,6,7,8,9]

// spread operator
let arr = [1,2,3,4,5,6,7,8,9];      
let arr1 = [...arr];
console.log(arr1); // here arr1 = [1,2,3,4,5,6,7,8,9] 

let arr2 = [12,34,22];
console.log(sum(...arr2)); 

// Hoisting 
console.log(a);
var a = 1; // here a = undefined
console.log(a);
// here a = 1 // move the declarations to the top before the execution
// only declaration is hoisted not the initialization

sayHello();  // Output: Hello, JavaScript!
function sayHello() {
    console.log("Hello, JavaScript!");
}

greet();  // TypeError: greet is not a function
var greet = function() {
    console.log("Hello!");
};
// here var greet is hoisted but the function is not hoisted

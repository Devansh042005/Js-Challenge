console.log("This is Devansh");
// Variables in Js
var a = 5;
var b = 6;
var c = "Harry" // javascript automatically detects the type of variable

console.log(a+b);
console.log(typeof a , typeof b , typeof c);

// case sensitive language

// const a1 = 6;
// a1 = a1 + 1; // this will give an error as a1 is constant

let A = 6;
let B = 33;

{
    let A = 4;
    console.log(A);
}

console.log(A);
// this will give the output as 4 and 6 as let is block scoped 

// Data types in Js
// Primitive data types
// Null, string, number, undefined, boolean, symbol , bigint

let x = "Devansh";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null; // type of object

console.log(x,y,z,p,q,r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// object in javascript is key value pair
let o = {
    "name" : "Harry",
    "job code" : 5600,
    is_handsome: true
}
console.log(o);
o.salary = "500000000";
console.log(o);
o.salary = "500000000000";
console.log(o);

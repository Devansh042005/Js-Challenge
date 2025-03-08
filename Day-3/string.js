console.log("This is string");
let a = "Devansh";
console.log(a[0]); // Accessing the first character of the string

console.log(a.length); // Length of the string

let real_name = "Devanshu";
let friend = "Devansh";
console.log("His real name is" + real_name + "and his friend name is" +friend);
console.log(`His real name is ${real_name} and his friend name is ${friend}`); // String Interpolation


let b = "Shivam";
console.log(b.toUpperCase()); // Convert the string to uppercase
console.log(b.toLowerCase()); // Convert the string to lowercase
console.log(b.slice(1, 3)); // Slice the string from index 1 to 3 where index 3 will not be included
console.log(b.replace('Sh', '44')); // Replace the string

// strings are Immutable
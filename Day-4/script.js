let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length);

// arrays are mutable
console.log(arr[2]);

// methods of arrays
// push
arr.push(6);
console.log(arr);
// pop
arr.pop();
console.log(arr);
// shift
arr.shift();    // removes the first element
console.log(arr);
// unshift
arr.unshift(1); // adds an element at the beginning
console.log(arr);
// slice
let arr2 = arr.slice(1,3);  // returns a new array from the given range
console.log(arr2);
// splice
arr.splice(1,2);    // removes elements from the given range
console.log(arr);
// concat
let arr3 = arr.concat(arr2);   // concatenates two arrays
console.log(arr3);
// indexOf
console.log(arr3.indexOf(3));    // returns the index of the element
// includes
console.log(arr3.includes(3));   // returns true if the element is present
// join
console.log(arr3.join(" "));    // converts the array into a string
// reverse
console.log(arr3.reverse());    // reverses the array
// sort
console.log(arr3.sort());   // sorts the array
// map
let arr4 = arr3.map((x) => x*2);    // returns a new array with the elements multiplied by 2
console.log(arr4);

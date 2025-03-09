let arr = [22,64,32,63,12];
let newArr1 = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr1.push(element*2);
}
console.log(newArr1);

let newArr2 = arr.map((e) =>{
    return e*2;
}) // map function is used to create a new array with the elements of the original array multiplied by 2

const greaterThanSeven = (e) => {
    if(e > 7){
        return true;
    }
    return false;
}
newArr1.filter(greaterThanSeven); // filter function is used to create a new array with the elements of the original array that satisfy the condition given in the function

let arr4 = [1,2,3,4,7,5];
const red = (a,b) =>{
    return a+b;
}
console.log(arr4.reduce(red)); // reduce function is used to reduce the array to a single value by applying the function given in the argument

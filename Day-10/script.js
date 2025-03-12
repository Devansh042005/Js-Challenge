let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid Input");
}

let sum = parseInt(a) + parseInt(b);


let x = 1;
try {
    console.log("The sum is:" , sum*x);
} catch (error) {
    console.log("Error aa gya bhai");
}
finally{
    console.log("Finally block");
} // here finally will print the console.log.. if we not used the finally .. only console.log is written here then also the console.log will print..

let x1 = 1;

function main(){
    try{
        console.log("The sum is:" , sum*x1);
        return true;
    }
    catch(error){
        console.log("Error aa gya bhai yeyeyey");
        return false
    }
    finally{
        console.log("Finally block1");
    } // here also the finally block will print.. but if we remove the finally from here . only console.log is here then it will not print it.
    // finally is used to execute the code after the try and catch block.. mainly in the functions.
}
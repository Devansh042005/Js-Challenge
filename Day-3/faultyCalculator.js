function calculator(num1 , operator , num2){
    let randomNum = Math.random();
    if(operator === '+'){
        if(randomNum>0.1){
            console.log("Result",num1+num2);
            console.log(randomNum);
        }
        else{
            console.log("Result",num1-num2);
            console.log(randomNum);
        }
    }
    else if(operator === '-'){
        if(randomNum>0.1){
            console.log("Result",num1-num2);
            console.log(randomNum);
        }
        else{
            console.log("Result",num1/num2);
            console.log(randomNum);
        }
    }
    else if(operator === '*'){
        if(randomNum>0.1){
            console.log("Result",num1*num2);
            console.log(randomNum);
        }
        else{
            console.log("Result",num1+num2);
            console.log(randomNum);
        }
    }
    else if(operator === '/'){
        if(randomNum>0.1){
            console.log("Result",num1/num2);
            console.log(randomNum);
        }
        else{
            console.log("Result",num1**num2);
            console.log(randomNum);
        }
    }
    else{
        console.log("Invalid Operator");
    }
}

calculator(5 , '+' , 6);
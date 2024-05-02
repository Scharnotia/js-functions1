// Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.


let number
function factorial(number){
if(number<0){
    return console.log("please enter a non-negative number ")
}
    if(number==0){
        return 1;
    }
     let result =number * factorial(number -1);
return result;
}

console.log(factorial(-5));


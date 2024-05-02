// Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.


let income 
    function calculateTax(){
 return function(income){
let roi 
if (income<=5000) {
    roi = 5;
} else if (income<=10000){
roi = 10;
} else{
roi = 20;
}
taxtobeaid = income*roi/100;
return taxtobeaid;
};
}
const calculatetaxforincome = calculateTax()
console.log(calculatetaxforincome(500));
console.log(calculatetaxforincome(5000));
console.log(calculatetaxforincome(10000));
console.log(calculatetaxforincome(20000));
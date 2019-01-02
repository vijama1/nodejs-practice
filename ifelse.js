var readline=require("readline-sync");
var num1=readline.question("Enter first number:")
var num2=readline.question("Enter second number:")
if (num1< num2){
console.log("greater number is "+num2)}
else if(num2<num1){
  console.log("Greater number is "+num1)
}
else {
  console.log("Both are equal")
}

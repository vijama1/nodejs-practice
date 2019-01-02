var readline=require("readline-sync");
var num1=Number(readline.question("Enter first number: "))
var num2=Number(readline.question("Enter second number: "))
var operation=readline.question("Enter the opration to be performed: ")
if (operation=="+"){
  result=num1+num2
}
else if(operation=="-"){
  result=num1-num2
}
else if (operation=="*") {
  result=num1*num2
}
else if (operation=="/"){
  result=num1/num2
}
else {
  result="Unknown"
}
console.log("Result is: "+result)

function sumFibs(num) {
  let firstnum=1;
  let secondnum=1;
  let fib=[1,1];
  let sum=0;
  let total=0;
  while(firstnum+secondnum<=num){
    sum=firstnum+secondnum;
    firstnum=secondnum;
    secondnum=sum;
    if(sum%2!=0)
    fib.push(sum)
}
for(let i=0;i<fib.length;i++){
  total+=fib[i];
}
  console.log(fib)
  console.log(total)
  return total
}

sumFibs(75025);

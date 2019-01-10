function factorialize(num) {
  var result;
  if(num==0){
  result=1;
  }
  else {
    result=num;
    while(num!=2){

      result*=num-1;
      num--;
    }

  }
return result;
}

console.log(factorialize(0));

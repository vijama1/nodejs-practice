function sumAll(arr) {
  let lower=arr[0];
  let higher=arr[1];
  //console.log(higher,lower)
  let sum=0;
  if(higher>lower)
  {
  for(let i=0;i<=higher-lower;i++){
    sum=sum+lower+i
  }
  return sum;
}
else{
  for(let i=0;i<=lower-higher;i++){
    sum=sum+higher+i
  }
  return sum;

}
}
sumAll([10, 5]);

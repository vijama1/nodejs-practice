function sumPrimes(num) {
  let count=0;
  let prime=[]
  let sum=0;
  for(let i=2;i<=num;i++){
    count=0
    for(let j=2;j<i;j++){
      if(i%j==0){
        count+=1
      }
      }
      if(count==0){
        prime.push(i)
        sum+=i;
      }
    }
    //console.log(prime)
    return sum;
  }



sumPrimes(977);

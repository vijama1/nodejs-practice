function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  /*let sliced=[];
  sliced=arr2.slice(n);

  console.log(arr2);*/
  let newarr=[]
  newarr=arr2.slice();
  for(let i=0;i<arr1.length;i++){
    newarr.splice(n,0,arr1[i])
    n++;
  }
  console.log(newarr);
  //var removed = myFish.splice(2, 0, 'drum');

  /*for(let i=0;i<sliced.length;i++){
    newarr.push(sliced[i]);
  }
  console.log(newarr)*/
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

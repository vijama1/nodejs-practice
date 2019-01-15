function dropElements(arr, func) {
  // Drop them elements.

  //console.log(arr.indexOf(1))
  let val=arr.length
  for(let i=0;i<val;i++){
    if(func(arr[0])){
      break
    }
     else{

       arr.shift()
        //console.log(arr)
     }

  }
  //console.log(arr)
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})

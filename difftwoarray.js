function diffArray(arr1, arr2) {
  var newArr = [];
  function check(arr1,arr2){
   // console.log("hello")
    for(let i=0;i<arr1.length;i++){
      if(arr2.indexOf(arr1[i])==-1){
        newArr.push(arr1[i])
      }
    }
  }
  check(arr1,arr2)
  check(arr2,arr1)
  console.log(newArr)
  // Same, same; but different.
  return newArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

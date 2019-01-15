function steamrollArray(arr) {
  let newarr=[]
  // I'm a steamroller, baby
  var flat=function(arg){
    if(!Array.isArray(arg)){
      newarr.push(arg)
    }
    else{
      for(let val in arg){
        flat(arg[val])

      }
    }

  }
  for (let value in arr){
    flat(arr[value])
  }
  console.log(newarr)
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

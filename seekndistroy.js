function destroyer(arr,...args) {
  // Remove all the values
  //console.log(args)
  for(let i=0;i<args.length;i++){
    //console.log(arr.includes(args[i]))
    while(arr.includes(args[i])){
      //console.log(args[i])
      arr.splice(arr.indexOf(args[i]),1)
      //console.log(arr)
      }
  }
  console.log(arr)
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

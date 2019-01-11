function uniteUnique(...arr) {
  //console.log(arr);
  let newarr=[];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(!newarr.includes(arr[i][j])){
        newarr.push(arr[i][j])
      }
    }
  }
  console.log(newarr)
  return arr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

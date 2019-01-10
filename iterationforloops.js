function filteredArray(arr, elem) {
  let newArr = [];

  // change code below this line
  for (let i=0;i<arr.length;i++){
    let count=0;
    for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]!=elem){
        count+=1;

      }
    }
    if (count==arr[i].length){
      newArr.push(arr[i]);
    }
  }

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));

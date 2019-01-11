function chunkArrayInGroups(arr, size) {
  let arr1=[];
  let arr2=[];
  let val=0;
  for(let i=0;i<(arr.length/size);i++){
    if(arr.length>=val){
      arr1.push(arr.slice(val,size+val))
      val+=size
    }
  }

  return arr1;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

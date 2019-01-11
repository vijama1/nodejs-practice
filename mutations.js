function mutation(arr) {
  let str1=arr[0];
  let str2=arr[1];
  let count=0;
  for(let i=0;i<str2.length;i++){
    if(str1.toLowerCase().includes(str2[i].toLowerCase())){
      count+=1;
    }
  }
  if(count==str2.length){
    return true;
  }
  else{
    return false;
  }
}

console.log(mutation(["hello", "helo"]));

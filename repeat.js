function repeatStringNumTimes(str, num) {
  // repeat after me
  let arr=[];
  for(let i=0;i<num;i++){
    //console.log("hello")
    arr.push(str);
  }

  console.log(arr.join(""));
}

repeatStringNumTimes("abc", 3);

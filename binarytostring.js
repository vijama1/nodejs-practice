function binaryAgent(str) {
  let arr=str.split(" ");
  let decimal=0
  let len=8
  let strarr=[]
  //console.log(parseInt("01000001",2))
  //console.log(Math.pow(2,0))
  //console.log(arr)

  for(let i=0;i<arr.length;i++){
    strarr.push(String.fromCharCode(parseInt(arr[i],2)))
  }
  console.log(strarr.join(""))
  return strarr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

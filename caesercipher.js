function rot13(str) {
  let decode=[] // LBH QVQ VG!
  console.log(str.charCodeAt())
  for(let i=0;i<str.length;i++){

    if(str.charCodeAt(i)-13>=65){
      decode.push(String.fromCharCode(str.charCodeAt(i)-13))
  }
  else if(str.charCodeAt(i)-13<65 && str.charCodeAt(i)-13>51){
    decode.push(String.fromCharCode(str.charCodeAt(i)-13+26))
  }
  else{
    decode.push(String.fromCharCode(str.charCodeAt(i)))
  }
  }
  return decode.join("");
}

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

function fearNotLetter(str) {
  let ascii=str[0].charCodeAt();
  for(let i=1;i<str.length;i++){
    if(str[i].charCodeAt()!=ascii+1){
        return String.fromCharCode(str[i].charCodeAt()-1)
        break
    }
    else{
      ascii+=1
    }
  }
  //return str;

}
//console.log(String.fromCharCode(97))
//console.log('a'.charCodeAt())
fearNotLetter("stvwx");

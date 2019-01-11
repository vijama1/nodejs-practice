function translatePigLatin(str) {
if(str[0]=="a" ||str[0]=="e" ||str[0]=="i" ||str[0]=="o" ||str[0]=="u"){
  //console.log(str.substr(1,)+str[0]+"way")
  return str+"way"
}
else{
  for(let i=0;i<str.length;i++){
  if(str[0]=="a" ||str[0]=="e" ||str[0]=="i" ||str[0]=="o" ||str[0]=="u"){
   break;
  }
  else{
     //console.log(str[0]);
    str=str.substring(1)+str[0]
    //console.log(str+"ay");
  }
  }
  console.log(str+"ay");
  return str+"ay";
}
}
translatePigLatin("algorithm");

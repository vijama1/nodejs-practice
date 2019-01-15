function pairElement(str) {
  let newarr=[]
  for(let i=0;i<str.length;i++){
    if(str[i]=="A"){
      newarr.push(["A","T"])
    }
   else if(str[i]=="T"){
      newarr.push(["T","A"])
    }
    else if(str[i]=="G"){
      newarr.push(["G","C"])
    }
    else if(str[i]=="C"){
      newarr.push(["C","G"])
    }

  }
  return newarr;
}

console.log(pairElement("GCG"));

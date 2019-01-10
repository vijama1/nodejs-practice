function truncateString(str, num) {
  // Clear o
//console.log(str[3])
  let myarr=[];
  for(let i=0;i<num;i++){
    myarr.push(str[i]);
    //console.log(myarr);
  }
  console.log(myarr.join(""));
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

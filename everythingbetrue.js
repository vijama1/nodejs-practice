function truthCheck(collection, pre) {
  // Is everyone being true?
  let count=0
  for(let i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
      count+=1
    }
}
if(count==collection.length){
  console.log(true)
  return true
}
else
{
  console.log(false)
  return false
}

}

truthCheck([{"single": "double"}, {"single": NaN}], "single")

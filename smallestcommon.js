function smallestCommons(arr) {
  let range=[]
  let answer=0
  let first=arr[0]
  let last=arr[arr.length-1]
  let count=0
  let ans=true
  if(first>last){
  while(first>=last){
    answer=first
    range.push(first)
    first-=1
  }
  }
  else{
    while(first<=last){
      answer=last
      range.push(first)
      first+=1
    }
  }
  while(ans==true){
  for(let i=0;i<range.length;i++){
    if(answer%range[i]==0){
      count+=1
    }
     else{
       answer+=1
       count=0
       break
     }
    }
    if(count==range.length){
      ans=false
    }
  }
console.log(answer)

}


smallestCommons([1, 13]);

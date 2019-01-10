function titleCase(str) {
  let arr=[];
  let newarr=[];
  arr=str.split(" ");
//  console.log(arr);
  for(let i=0;i<arr.length;i++){
    let caps=arr[i][0].toUpperCase();
    let remaining=arr[i].substr(1).toLowerCase();
    newarr.push(caps+remaining);
}
return newarr.join(" ");

}

titleCase("I'm a little tea pot");

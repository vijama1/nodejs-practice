function largestOfFour(arr) {
  // You can do t
  let arr1=[];
  for (let val in arr){
    arr1.push(Math.max.apply(0,arr[val]));
  }
  console.log(arr1);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

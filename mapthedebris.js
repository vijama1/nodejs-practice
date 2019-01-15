function orbitalPeriod(arr) {
  var GM = 398600.4418;
  let newarr=[]
  var orb=0;
  var earthRadius = 6367.4447;
  for(let i=0;i<arr.length;i++){
    var a = 2 * Math.PI;
    var c = Math.pow(earthRadius + arr[i].avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    orb=2*Math.PI*Math.sqrt((earthRadius+arr[i]["avgAlt"]**3)/GM)
    //console.log(orbPeriod)
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbPeriod;
  }
  console.log(arr)
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

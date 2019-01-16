function palindrome(str) {

  str=str.replace(/[\W_]/g, '');

  //let rev=str.reverse()
//  console.log(rev)
  return str.toLowerCase()===str.toLowerCase().split("").reverse().join("")
  // Good luck!;
}



palindrome("race car");

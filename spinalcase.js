function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //let regex=/\s+ | _+/g;
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str=str.replace(regex,"-").toLowerCase();
  console.log(str)

  return str;
}

spinalCase("AllThe-small Things");

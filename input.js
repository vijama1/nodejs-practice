var stdin=process.openStdin();
console.log(stdin)
stdin.addListener("data",function(d){
  console.log("you entered",d.toString());
});

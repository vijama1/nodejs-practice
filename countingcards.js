var count = 0;
function cc(card) {
  // Only change code below this line
  var answer="";
  if(card==2 || card==3 || card==4 || card==5 || card==6){
    count+=1;

    }
    else if(card==7 || card ==8 || card ==9){
      count+=0;

    }
    else if(card==10 || card=="J" || card=="Q" || card=="K" || card=="A"){
      count-=1;
    }

    if(count>0){
    answer=count+" Bet";
    }
    else {
      answer=count+" Hold";
    }
  return answer;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

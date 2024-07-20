function ran() {
  var ran = Math.floor(Math.random() * 4);
  return ran;
}

var boxes = ["red", "blue", "green", "yellow"];
var pattern = [];
var userarray = [];
var gamestrat = false;
var levl=0;

$("button").click(function () {
    
  var userchoice = $(this).attr("id");
  userarray.push(userchoice);
  var audio = new Audio("audio/" + userchoice + ".mp3");
  audio.play();
  console.log(userarray);
  checkpattern(userarray.length-1);
});
function nextseq() {
    $("h1").text("Level "+levl)
  
  var rand = ran();
  var pushedcol = boxes[rand];
  pattern.push(pushedcol);
  console.log(pattern);
  $("#" + pushedcol)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("audio/" + pushedcol + ".mp3");
  audio.play();
}
$(document).keypress(function (event) {
  if (!gamestrat) {
    userarray=[]
    nextseq();
    gamestrat = true;}
    console.log(gamestrat)
   
  
});
$(document).on('touchstart',function(){
  if (!gamestrat) {
    userarray=[]
    nextseq();
    gamestrat = true;}
    console.log(gamestrat)
})

function checkpattern(lvl) {
  
    if (pattern[lvl] === userarray[lvl]) {
      if (pattern.length === userarray.length) {
        userarray = [];
        levl++;
        setTimeout(function () {
          nextseq();
        }, 1000);
       

      }
    }else{
        $("body").addClass("game-over")
        var audio=new Audio("audio/wrong.mp3")
        audio.play()
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 600);
        $("h1").text("Game Over Try Again Press Any key")
        $(document).keypress(function(){
            location.reload()
        })
    }
  
}



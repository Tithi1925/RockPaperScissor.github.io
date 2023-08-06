
function clickfav1() {
   document.getElementById("span1").innerText = "Rock";
}
function clickfav2() {
   document.getElementById("span1").innerText = "Paper";
}
function clickfav3() {
   document.getElementById("span1").innerText = "Scissor";
}
function random() {
   const randomname = ["Rock", "Paper", "Scissor"];
   var randomitem = randomname[Math.floor(Math.random() * randomname.length)];
   document.getElementById("span2").innerHTML = randomitem;
}
function draw() {
   var computer1 = document.getElementById("span1").innerText == "Rock" && document.getElementById("span2").innerText == "Paper"
      || document.getElementById("span1").innerText == "Paper" && document.getElementById("span2").innerText == "Scissor"
      || document.getElementById("span1").innerText == "Scissor" && document.getElementById("span2").innerText == "Rock";
   var Computer1 = document.getElementById("span2").innerText != document.getElementById("span1").innerText;

   if (document.getElementById("span1").innerText === document.getElementById("span2").innerText) {
      document.getElementById("span3").innerText = "It's a tie!";
   }
   else if (computer1) {
      document.getElementById("span3").innerText = "Ohh!,Computer wins!";
   }
   else {
      document.getElementById("span3").innerText = "Hurrah!,You win the game";
   }
}
var i = 1;
var j = 1;
function player() {
   if (span3.innerText == "Hurrah!,You win the game") {
      document.getElementById("plspan").innerHTML = i++;
   }
   else if (span3.innerText == "Ohh!,Computer wins!") {
      document.getElementById("cospan").innerHTML = j++;
   }
}



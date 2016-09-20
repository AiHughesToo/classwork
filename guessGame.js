// set var for answer
var answer;


// set up the game 
function setupGame(){
//clear old values
$("#tbxGuess").val("");
$("#message").val("");
//come up with answer
answer = parseInt(Math.random() * 10);
console.log("cheater cheater" + answer);
// show the approate the divs

$("#intro").show();

$("#game").hide();

$("#playAgain").hide();

}

// handle the guess
function handleGuess() {

var guess = $("#tbxGuess").val();

if (+guess == answer){
// tell user answer is correct
$("#message").text("you win");
// play again
$("#playAgain").show();
}else {
$("#message").text("nope");
    // tell user answer is wrong
   $("#tbxGuess").val(""); 
}

}

//set up the page 
function playGame(){

$("#game").show();
$("#intro").hide();

$("#tbxGuess").focus();
}

// when the page loads
$(function(){
    $("#startGame").on("click", playGame);
    $("#tbnGuess").on("click", handleGuess);
    $("#playAgain").on("click", setupGame);
    $("#quit").on("click", setupGame);
    setupGame();
});
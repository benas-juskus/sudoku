function openStartPanel(){// when "New game" button is pressed opens a star new game panel 
    document.getElementsByClassName("new-game")[0].addEventListener("click", function(){
    document.getElementById("start_new").style.visibility = "visible" // makes element visable
    });
 }
 function startGame(){ // closes start new game panel (reserved to  "start game" for future) 
    document.getElementById("start_game").addEventListener("click", function(){
    document.getElementById("start_new").style.visibility = "hidden"
    });
 }
 function cancelStartGame(){// closes start new game panel
    document.getElementById("start_game_cancel").addEventListener("click", function(){
    document.getElementById("start_new").style.visibility = "hidden"
    });
 }

 export {openStartPanel, startGame, cancelStartGame};
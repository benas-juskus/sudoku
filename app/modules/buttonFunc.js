function openStartPanel(){// when "New game" button is pressed opens a start new game panel 
   document.getElementsByClassName("new-game")[0].addEventListener("click", function(){
   document.getElementById("start_new").style.visibility = "visible" // makes element visable
   });
};
function dificultyClosePanel(){// when dificulty button is pressed opens a start new game panel 
   let dif_buttons = document.querySelectorAll(".dif");
   dif_buttons.forEach(button => {
      button.addEventListener("click", () => document.getElementById("start_new").style.visibility = "hidden") // makes element visable)
      });
};
function startGame(){ // closes start new game panel (reserved to  "start game" for future) 
   visibilityChange("winner_new_game", "winner", "hidden");
   visibilityChange("start_new_game", "game_over", "hidden");
   visibilityChange("winner_new_game", "start_new", "visible");
   visibilityChange("start_new_game", "start_new", "visible");
};
function cancelStartGame(){// closes start new game panel, game over panel,
   visibilityChange("start_game_cancel", "start_new", "hidden");
   visibilityChange("game_over_cancel", "game_over", "hidden");
   visibilityChange("winner_cancel", "winner", "hidden");
};

function visibilityChange(button_id, element_id, visibility){
   document.getElementById(button_id).addEventListener("click", function(){
      document.getElementById(element_id).style.visibility = visibility;
   });
}

 export {openStartPanel, startGame, cancelStartGame, dificultyClosePanel};
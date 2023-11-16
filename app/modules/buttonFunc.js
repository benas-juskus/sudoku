import {activeFieldCheck, activeSameCheck, activeZoneCheck} from "./activeField.js"
/**
 *  when "New game" button is pressed opens a start new game panel 
 */
function openStartPanel(){
   document.getElementsByClassName("new-game")[0].addEventListener("click", function(){
   document.getElementById("start_new").style.visibility = "visible" // makes element visable
   });
};
/**
 *  when dificulty button is pressed opens a start new game panel 
 * and cliers the grid of active fields and zones 
 */
function dificultyClosePanel(){//
   let dif_buttons = document.querySelectorAll(".dif");
   dif_buttons.forEach(button => {
      button.addEventListener("click", () => {
         activeFieldCheck();
         activeSameCheck();
         activeZoneCheck();
         document.getElementById("start_new").style.visibility = "hidden";
      });
   });
};
function startGame(){ // closes start new game panel (reserved to  "start game" for future) 
   visibilityChange("winner_new_game", "winner", "hidden");
   visibilityChange("start_new_game", "game_over", "hidden");
   visibilityChange("winner_new_game", "start_new", "visible");
   visibilityChange("start_new_game", "start_new", "visible");
};
/**
 * ads event listeners to hide elements
 */
function cancelStartGame(){// closes start new game panel, game over panel,
   visibilityChange("start_game_cancel", "start_new", "hidden");
   visibilityChange("game_over_cancel", "game_over", "hidden");
   visibilityChange("winner_cancel", "winner", "hidden");
};
/**
 * adds event listener on element to change its visibility status 
 * @param {string} button_id element id
 * @param {string} element_id element id
 * @param {string} visibility style name
 * @example visibilityChange("winner_cancel", "winner", "hidden")
 */
function visibilityChange(button_id, element_id, visibility){
   document.getElementById(button_id).addEventListener("click", function(){
      document.getElementById(element_id).style.visibility = visibility;
   });
}

 export {openStartPanel, startGame, cancelStartGame, dificultyClosePanel};
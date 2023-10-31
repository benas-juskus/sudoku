import {grid, numPad, activeFieldCheck} from "./modules/grid.js";
import {newGame} from "./modules/numberFunc.js";

const fields = document.getElementsByClassName("field");
document.getElementById("game-grid").innerHTML = grid();

document.getElementById("num-pad").innerHTML = numPad();

let field = document.getElementsByClassName("field");
for(let f = 0; f < field.length;f++){
    field[f].addEventListener("click", activeFieldCheck)
    field[f].addEventListener("click", () => field[f].className += " active")
}

newGame(arr,fields,0);

//New Game Button Event
const newGameButton = document.getElementsByClassName("new-game")[0];
newGameButton.addEventListener("click", ()=>newGame(arr,fields,3));
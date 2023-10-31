import {grid, numPad, activeFieldCheck} from "./modules/grid.js";
import { generateRandomNumber, generateRow, generateAllRows } from "./modules/puzzle.js";

document.getElementById("game-grid").innerHTML = grid();

document.getElementById("num-pad").innerHTML = numPad();

let field = document.getElementsByClassName("field");
for(let f = 0; f < field.length;f++){
    field[f].addEventListener("click", activeFieldCheck)
    field[f].addEventListener("click", () => field[f].className += " active")
}

console.log(generateAllRows());



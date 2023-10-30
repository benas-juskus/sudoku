import {grid, numPad, activeFieldCheck} from "./modules/grid.js";

document.getElementById("game-grid").innerHTML = grid();

document.getElementById("num-pad").innerHTML = numPad();

let field = document.getElementsByClassName("field");
for(let f = 0; f < field.length;f++){
    field[f].addEventListener("click", activeFieldCheck)
    field[f].addEventListener("click", () => field[f].className += " active")
}




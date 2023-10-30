import {grid, numPad, activeFieldCheck} from "./modules/grid.js";
import * as numberFunc from "./modules/numberFunc.js";

const fields = document.getElementsByClassName("field");
document.getElementById("game-grid").innerHTML = grid();

document.getElementById("num-pad").innerHTML = numPad();

let field = document.getElementsByClassName("field");
for(let f = 0; f < field.length;f++){
    field[f].addEventListener("click", activeFieldCheck)
    field[f].addEventListener("click", () => field[f].className += " active")
}

// Temporary arr
let arr = [];
for (let i = 1; i<=9; i++){
    for (let i = 1; i<=9; i++){
        arr.push(i)
    }
}
numberFunc.fillTable(arr,fields);
numberFunc.addNumberEvents(fields)
numberFunc.hideFields(fields,0)
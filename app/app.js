import {markActive} from "./modules/activeField.js";
import * as generateTable from "./modules/grid.js";
import * as buttonFunction from "./modules/buttonFunc.js";
import {newGame,sortFields} from "./modules/numberFunc.js";

document.getElementById("game-grid").innerHTML = generateTable.grid(); //generates game grid
document.getElementById("num-pad").innerHTML = generateTable.numPad();// generates number pad
document.getElementById("start_new").innerHTML = generateTable.startNewGamePanel();// generates (originaly unvisable) start new game panel
generateTable.lineNumber();// adds line number class to field
generateTable.colNumber();// adds col number class to field
markActive();// marks clicked field
buttonFunction.openStartPanel(); // opens start new game panel
buttonFunction.startGame(); 
buttonFunction.cancelStartGame();// closes start new game panel
//example arr
let array = [];
for (let i=1; i<=9; i++){
    for (let i = 1; i<=9; i++){
        array.push(i);
    }
}

const fields = document.getElementsByClassName("field");
/* array = generated numbers
0 = super easy difficulty by default
*/
newGame(array,sortFields(fields),0);
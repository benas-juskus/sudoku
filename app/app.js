import * as generateTable from "./modules/grid.js";
import { generateRandomNumber, generateRow, generateAllRows } from "./modules/puzzle.js";

document.getElementById("game-grid").innerHTML = generateTable.grid(); //generates game grid
document.getElementById("num-pad").innerHTML = generateTable.numPad();// generates number pad
document.getElementById("start_new").innerHTML = generateTable.startNewGamePanel();// generates (originaly unvisable) start new game panel
generateTable.openStartPanel(); // opens start new game panel
generateTable.markActive();// marks clicked field
generateTable.startGame(); 
generateTable.cancelStartGame();// closes start new game panel

console.log(generateAllRows());



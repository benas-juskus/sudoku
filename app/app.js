import * as generateTable from "./modules/grid.js";
import {generatePuzzle} from "./modules/puzzle.js";
import {newGame,sortFields} from "./modules/numberFunc.js";

document.getElementById("game-grid").innerHTML = generateTable.grid(); //generates game grid
document.getElementById("num-pad").innerHTML = generateTable.numPad();// generates number pad
document.getElementById("start_new").innerHTML = generateTable.startNewGamePanel();// generates (originaly unvisable) start new game panel
generateTable.openStartPanel(); // opens start new game panel
generateTable.markActive();// marks clicked field
generateTable.startGame(); 
generateTable.cancelStartGame();// closes start new game panel

const fields = document.getElementsByClassName("field");
/* array = generated numbers
0 = super easy difficulty by default
*/
newGame(generatePuzzle,sortFields(fields),0);
import {markActive} from "./modules/activeField.js";
import * as generateTable from "./modules/grid/grid.js";
import * as buttonFunction from "./modules/buttonFunc.js";
import {newGame,sortFields} from "./modules/numberFunc.js";
import {numPad} from "./numpad/numpad.js"

document.getElementById("game-grid").innerHTML = generateTable.grid(); //generates game grid
document.getElementById("num-pad").innerHTML = numPad();// generates number pad
document.getElementById("start_new").innerHTML = generateTable.startNewGamePanel();// generates (originaly unvisable) start new game panel
document.getElementById("game_over").innerHTML = generateTable. gameOverPanel();// generates (originaly unvisable) start new game panel
document.getElementById("winner").innerHTML = generateTable. winnerPanel();// generates (originaly unvisable) start new game panel
generateTable.lineNumber();// adds line number class to field
generateTable.colNumber();// adds col number class to field
buttonFunction.openStartPanel(); // opens start new game panel
buttonFunction.startGame(); 
buttonFunction.cancelStartGame();// closes start new game panel
buttonFunction.dificultyClosePanel();// closes start new game panel

const fields = document.getElementsByClassName("field");
/* array = generated numbers
0 = super easy difficulty by default
1 = 25hidden, 2 = 40hidden , 3 = 55hidden
*/
newGame(sortFields(fields),0);
markActive();// marks clicked field


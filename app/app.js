// import {grid, numPad, activeFieldCheck, startNewGamePanel, markActive} from "./modules/grid.js";
import * as generateTable from "./modules/grid.js";

document.getElementById("game-grid").innerHTML = generateTable.grid();
document.getElementById("num-pad").innerHTML = generateTable.numPad();
document.getElementById("start_new").innerHTML = generateTable.startNewGamePanel();
generateTable.openStartPanel();
generateTable.markActive();





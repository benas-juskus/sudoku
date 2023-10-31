import * as generateTable from "./modules/grid.js";
import {newGame,sortFields} from "./modules/numberFunc.js";

document.getElementById("game-grid").innerHTML = generateTable.grid(); //generates game grid
document.getElementById("num-pad").innerHTML = generateTable.numPad();// generates number pad
document.getElementById("start_new").innerHTML = generateTable.startNewGamePanel();// generates (originaly unvisable) start new game panel
generateTable.openStartPanel(); // opens start new game panel
generateTable.markActive();// marks clicked field
generateTable.startGame(); 
generateTable.cancelStartGame();// closes start new game panel
//example arr
let arr = [];
for (let i=1; i<=9; i++){
    for (let i = 1; i<=9; i++){
        arr.push(i);
    }
}
newGame(arr,sortFields(fields),0);

//New Game Button Event
const newGameButton = document.getElementsByClassName("new-game")[0];
newGameButton.addEventListener("click", ()=>newGame(arr,sortFields(fields),2));
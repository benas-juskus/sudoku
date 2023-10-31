function grid() {
    let grid_square = "";
    for (let k = 1; k < 10; k++) {// generates 9 squares..
        grid_square += `<div class="square" id="sq-${k}">`;//adding class and id to a square
        for(let l = 1; l < 10; l++){// generates 9 inner fields inside the square
            grid_square += `<div class="field">`
            grid_square += `<span class="num"></span>`
            grid_square += `</div>`
        }
        grid_square += `</div>`;
    }
    return grid_square;
}
function numPad(){
    let num_pad = "";
    for(let n = 1; n < 10; n++ ){
        num_pad += `<div class="num-pad-item">`
        num_pad += n
        num_pad += `</div>`
    } 
    return num_pad
}

function startNewGamePanel(){
    let panel = ""
    panel += `<div class="start_game_panel">`;
    panel += `<p>Choose Dificulty Level:</p>`;
    panel += `<div class="dificulty_level" id="easy">Easy</div>`;
    panel += `<div class="dificulty_level" id="medium">Medium</div>`;
    panel += `<div class="dificulty_level" id="hard">Hard</div>`;
    panel += `<div class="dificulty_level" id="start_game">Start Game</div>`;
    panel += `<div class="dificulty_level" id="start_game_cancel">Cancel</div>`;
    panel += `</div>`;
    return panel;    
}
function activeFieldCheck(){// chacks if clicked field has class "active". If found, removes it 
    let active_field = document.getElementsByClassName("active");
    if (typeof active_field[0] != "undefined") active_field[0].classList.remove("active");
 }
function markActive(){  //marks the active field (the one user clicked on)
    let field = document.getElementsByClassName("field");
    for(let f = 0; f < field.length;f++){
        field[f].addEventListener("click", activeFieldCheck)
        field[f].addEventListener("click", () => field[f].classList.add("active"));
    }
}
 function openStartPanel(){
    document.getElementsByClassName("new-game")[0].addEventListener("click", function(){
    document.getElementById("start_new").style.visibility = "visible"
    });
 }



export {grid, numPad, activeFieldCheck, startNewGamePanel, markActive, openStartPanel};

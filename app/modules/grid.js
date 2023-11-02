function grid() {
    let grid_square = "";
    for (let k = 1; k < 10; k++) {// generates 9 squares..
        grid_square += `<div class="square" id="sq-${k}">`;//adding class and id to a square
        for(let l = 1; l < 10; l++){// generates 9 inner fields inside the square
            grid_square += `<div class="field sq${k}">`
            grid_square += `<span class="num"></span>`
            grid_square += `</div>`
        }
        grid_square += `</div>`;
    }
    return grid_square;
}

function numPad(){ //generates number pad on the side 
    let num_pad = "";
    for(let n = 1; n < 10; n++ ){
        num_pad += `<div class="num-pad-item">`
        num_pad += n
        num_pad += `</div>`
    } 
    return num_pad
}

//---------------------------FUNCTIONS TO ADD LINE NUMBER CLASS TO FIELD---------------------------------
function lineNumber(){
    let kv = document.getElementById("game-grid").children;
    for(let k = 0; k < kv.length; k++){
        if (k < 3){
            lNumber(kv[k], "l1", "l2", "l3"); 
        }else if(k >=3 && k < 6){
            lNumber(kv[k], "l4", "l5", "l6");
        }else{
            lNumber(kv[k], "l7", "l8", "l9");
        } 
    }
}

function lNumber(arr, a, b, c){
    for( let i = 0; i < arr.children.length; i++){
        if(i < 3){
            arr.children[i].classList.add(a);
        }else if(i >= 3 && i < 6){
            arr.children[i].classList.add(b);        
        }else{
            arr.children[i].classList.add(c);        
        }
    }        
}
//-----------------------------FUNCTIONS TO ADD COL NUMBER CLASS TO FIELD---------------------------------

function colNumber(){
    let kv = document.getElementById("game-grid").children;
    for(let k = 0; k < kv.length; k++){
        if (k == 0 || k == 3 || k == 6  ){
            cNumber(kv[k], "c1", "c2", "c3");
        }else if(k == 1 || k == 4 || k == 7){
            cNumber(kv[k], "c4", "c5", "c6");
        }else{
            cNumber(kv[k], "c7", "c8", "c9");
        }
    }
}

function cNumber(arr, a, b, c){
    for( let i = 0; i < arr.children.length; i++){
        if(i == 0 || i == 3 || i == 6){
            arr.children[i].classList.add(a);
        }else if(i == 1 || i == 4 || i == 7){
            arr.children[i].classList.add(b);        
        }else{
            arr.children[i].classList.add(c);        
        }
    }        
}
//----------------------------------------------------------

function startNewGamePanel(){// function generates start new game panel with dificulty pickers
    let panel = ""
    panel += `<div class="start_game_panel">`;
    panel += `<p>Choose Dificulty Level:</p>`;
    panel += `<div class="dificulty_level" id="easy" tabindex="1">Easy</div>`;
    panel += `<div class="dificulty_level" id="medium" tabindex="2">Medium</div>`;
    panel += `<div class="dificulty_level" id="hard" tabindex="3">Hard</div>`;
    panel += `<div class="dificulty_level" id="start_game">Start Game</div>`;
    panel += `<div class="cancel" id="start_game_cancel">X</div>`;
    panel += `</div>`;
    return panel;    
}
// let svg = `<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>`

export {grid, numPad, startNewGamePanel, lineNumber, colNumber, lNumber, cNumber};

function grid() {
    let grid_square = "";
    for (let k = 1; k < 10; k++) {
        grid_square += `<div class="square" id="sq-${k}">`;
        for(let l = 1; l < 10; l++){
            grid_square += `<div class="field"></div>`
        }
        grid_square += `</div>`;
    }
    console.log(grid_square)
    return grid_square;
}
document.getElementById("game-grid").innerHTML = grid();

function numPad(){
    let num_pad = "";
    for(let n = 1; n < 10; n++ ){
        num_pad += `<div class="num-pad-item">`
        num_pad += n
        num_pad += `</div>`
    } 
    return num_pad
}
document.getElementById("num-pad").innerHTML = numPad();

let field = document.getElementsByClassName("field");
for(let f = 0; f < field.length;f++){
    field[f].addEventListener("click", activeFieldCheck)
    field[f].addEventListener("click", () => field[f].className += " active")
}
function activeFieldCheck(){
    let active_field = document.getElementsByClassName("active");
    if (typeof active_field[0] != "undefined"){
        active_field[0].className = active_field[0].className.replace(" active", "")
    }
 }



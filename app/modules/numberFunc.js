/*fields = iterable collection of divs where fieldbers are placed
(get via document.getElementsByClassName("class")*/
function fillTable(generatedNumsArray, fields) {
    let index = 0;
    for (let e of fields) {
        e.innerHTML = generatedNumsArray[index];
        index++;
    }
}
/*difficulty: 0 = Super easy 1 = easy; 2 = medium; 3 = hard*/
function hideFields(fields, difficulty) {
    let hiddenCount;
    let random = Math.random();
    if (difficulty == 0){
        hiddenCount = 3
    } else if (difficulty == 1) {
        hiddenCount = 25;
    } else if (difficulty == 2) {
        hiddenCount = 30;
    } else {
        hiddenCount = 35;
    }
    while (hiddenCount != 0) {
        for (let e of fields) {
            if (hiddenCount == 0) {
                break;
            } else if (random < 0.05 && e.innerHTML !== "") {
                e.innerHTML = "";
                hiddenCount--;
            }
            random = Math.random();
        }
    }
}
/* Click & keyboard events.*/
function addNumberEvents(fields) {
    for (let e of fields) {
        e.addEventListener("click", function () {
            selectedField = e;
        });
    }
    document.addEventListener("keydown", (event) => {
        if (selectedField && /[1-9]/.test(event.key)) {
            selectedField.innerHTML = event.key;
        }
    });
    const numPad = document.getElementsByClassName("num-pad-item");
    let index = 1;
    for (let i = 0; i < numPad.length; i++){
        numPad[i].addEventListener("click", function(){
            if (selectedField){
                selectedField.innerHTML=`${i+1}`;
            }
        })
    }
}
let selectedField = {};

export {addNumberEvents, fillTable, hideFields}
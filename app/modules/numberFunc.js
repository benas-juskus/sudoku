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
    if (difficulty == 0) {
        hiddenCount = 3;
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
                e.remove;
            }
            random = Math.random();
        }
    }
}
/* Click & keyboard events.*/
function addNumberEvents(array, fields) {
    for (let e of fields) {
        e.classList.remove("completed");
        e.addEventListener("click", function () {
            if (e.classList.contains("mistake") || (e.innerHTML == "" && !e.classList.contains("completed"))) {
                selectedField = e;
            } else {
                selectedField = "";
            }
        });
    }
    // Keyboard events
    document.addEventListener("keydown", (event) => {
        if (selectedField && /[1-9]/.test(event.key)) {
            selectedField.innerHTML = event.key;
            if (mistake(selectedField,fields,array)){
                selectedField.classList.add("mistake");
                // This is where mistake display function should go
            } else{
                selectedField.classList.add("completed");
                selectedField.classList.remove("mistake");
                selectedField = "";
            }
        }
    });
    // Numpad Events
    const numPad = document.getElementsByClassName("num-pad-item");
    let index = 1;
    for (let i = 0; i < numPad.length; i++) {
        numPad[i].addEventListener("click", function () {
            if (selectedField) {
                selectedField.innerHTML = `${i + 1}`;
                if (mistake(selectedField,fields,array)){
                    selectedField.classList.add("mistake");
                    // This is where mistake display function should go
                } else{
                    selectedField.classList.add("completed");
                    selectedField.classList.remove("mistake");
                    selectedField = "";
                }
            }
        });
    }
}
function mistake(element, fields, storedNums) {
    let index = 0;
    for (let e of fields){
        if (e == element){
            break;
        }
        index++;
    }
    if (storedNums[index] != element.innerHTML){
       return true;
    }
}
// Sorts fields so that numbers are laid out row by row rather than square by square
function sortFields(fields){
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let final = [];
    let index = 1;
    let sqCol = 1;
    for (let e of fields){
        if (index <= 3){
            ar1.push(e);
        } else if (index >3 && index <=6){
            ar2.push(e);
        } else {
            ar3.push(e);
        }
        index++;
        if (index > 9){
            index = 1;
            sqCol++;
            console.log(true)
        }
        if (sqCol > 3){
            sqCol = 1;
            final.push(ar1);
            final.push(ar2);
            final.push(ar3);
            ar1=[];
            ar2=[];
            ar3=[];
        }        
    }
    return final.flat(1);
}
// Regenerates table
function newGame(array, fields, difficulty) {
    fillTable(array, fields);
    hideFields(fields, difficulty);
    addNumberEvents(array, fields);
}

let selectedField;
export { sortFields, newGame };
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
        hiddenCount = 40;
    } else {
        hiddenCount = 55;
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
        e.addEventListener("click", function () {
            if (
                e.classList.contains("mistake") ||
                (e.innerHTML == "" && !e.classList.contains("completed"))
            ) {
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
            mistake(selectedField, fields, storedArray);
        } else if (event.key == "Backspace"){
            eraser();
        }
    });
    // Numpad Events
    const numPad = document.getElementsByClassName("num-pad-item");
    let index = 1;
    for (let i = 0; i < numPad.length; i++) {
        numPad[i].addEventListener("click", function () {
            if (selectedField) {
                selectedField.innerHTML = `${i + 1}`;
                mistake(selectedField, fields, storedArray);
            }
        });
    }
    // eraser button even
    const eraserButton = document.getElementsByClassName("control-pad")[0];
    eraserButton.addEventListener("click",()=>eraser())
    menuEvents(
        array,
        fields,
        document.getElementsByClassName("dificulty_level")
    );
}
function menuEvents(array, fields, menu) {
    menu[0].addEventListener("click", () => {
        newGame(storedFunction, fields, 1);
    });
    menu[1].addEventListener("click", () => {
        newGame(storedFunction, fields, 2);
    });
    menu[2].addEventListener("click", () => {
        newGame(storedFunction, fields, 3);
    });
}
function mistake(element, fields, storedNums) {
    let index = 0;
    for (let e of fields) {
        if (e == element) {
            break;
        }
        index++;
    }
    if (storedNums[index] != element.innerHTML) {
        //if mistake, adds "mistake" class that will allow editing it if clicked away from field
        element.classList.add("mistake");
        // Mistake counter
        if (mistakeCount < maxMistakes-1){
            mistakeCount++;
            document.getElementById("mistake_counter").innerHTML = mistakeCount;
        } else {
            // Loss screen
            document.getElementById("mistake_counter").innerHTML = ++mistakeCount;
            selectedField = "";
            game_over.style.visibility = "visible";
        }
    } else {
        //if entered num isn't a mistake, adds "completed" class which prevents editing field.
        element.classList.add("completed");
        element.classList.remove("mistake");
        selectedField = "";
        // Win screen
        let finished = true;
        for (let e of fields){
            if (e.innerHTML == "") finished = false;
        }
        if (finished) {
            winner.style.visibility = "visible";
        }
    }
}
// Sorts fields so that numbers are laid out row by row rather than square by square
function sortFields(fields) {
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let final = [];
    let index = 1;
    let sqCol = 1;
    for (let e of fields) {
        if (index <= 3) {
            ar1.push(e);
        } else if (index > 3 && index <= 6) {
            ar2.push(e);
        } else {
            ar3.push(e);
        }
        index++;
        if (index > 9) {
            index = 1;
            sqCol++;
        }
        if (sqCol > 3) {
            sqCol = 1;
            final.push(ar1);
            final.push(ar2);
            final.push(ar3);
            ar1 = [];
            ar2 = [];
            ar3 = [];
        }
    }
    return final.flat(1);
}
// Eraser.....
function eraser(){
    if (selectedField != ""){
        if (selectedField.classList.contains("mistake")){
            selectedField.innerHTML = "";
            selectedField.classList.remove("mistake");
        }
    }
}
// Regenerates table
function newGame(array, fields, difficulty) {
    mistakeCount = 0;
    document.getElementById("mistake_counter").innerHTML = 0;
    selectedField = "";
    if (!storedFunction) storedFunction = array;
    storedArray = storedFunction();
    fillTable(storedArray, fields);
    hideFields(fields, difficulty);
    for (let e of fields) {
        e.classList.remove("completed");
        e.classList.remove("mistake");
        // Make active field selectedField
        if (e.classList.contains("active") && e.innerHTML == ""){
                selectedField = e;
            }
    }
    if (!added) {
        addNumberEvents(storedArray, fields);
        added = 1;
    }

}

// Have number events been added?
let added = 0;

let maxMistakes = 5;
mistake_allowance.innerHTML = maxMistakes;
let mistakeCount = 0;
let storedFunction = undefined;
let storedArray = [];
let selectedField;
export { sortFields, newGame };
function generateRandomNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    let digit = Math.floor(Math.random() * (max - min) + min);

    return digit;
}

function generateRow() {
    let row = [];

    while (row.length < 9) {
        let digit = generateRandomNumber();
        if (row.includes(digit)) {
            continue;
        } else {
            row.push(digit);
        }
        
    }
    return row;
}

function generateAllRows() {
    let allRows = [];
    

    while (allRows.length < 9) {
        // let newRow = generateRow();

        if (allRows.length == 0) {
            let newRow1 = generateRow();
            allRows.push(newRow1);
            console.log('first row: ', newRow1);
            continue;
        }
        
        for (let rowCounter = 0; rowCounter < 8; rowCounter++) {
            let newRow2 = generateRow();
            for (let digitCounter = 0; digitCounter < newRow2.length; digitCounter++) {
                if (newRow2[digitCounter] != allRows[rowCounter][digitCounter]) {
                    // console.log(newRow2[digitCounter], allRows[rowCounter][digitCounter]);
                    continue;
                }
            }
            allRows.push(newRow2);
        }
            
        
        
    }

    return allRows;
}

export {generateRandomNumber, generateRow, generateAllRows};
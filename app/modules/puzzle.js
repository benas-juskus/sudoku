//A function that generates a random number from 1 to 9 and returns it.
function generateRandomNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    let digit = Math.floor(Math.random() * (max - min) + min);

    return digit;
}

//A function that generates and returns an array with numbers from 1 to 9 in a randomized sequence.
function genareteRandomSequence() {
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

//This is a function that will generate the full number layout for the puzzle, without hidden numbers.
function generatePuzzle() {
    const board = Array.from({length: 9}, () => Array(9).fill(0)); //Create an array of 9 arrays representing each row, with 9 values inside that for now are all 0.

    //This function will check if it is safe to place a number in a location on the board.
    function isSafe(row, col, num) {
        for(let i = 0; i < 9; i++) { //This loop will be checking the 9 digits in each row, column and 3x3 box to make sure the number it is trying to place there does not already exist.

            //Variables m and n help determine in which of the 3x3 squares the current number being located will be placed in.
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;

            if(board[row][i] === num || board[i][col] === num || board[m][n] === num) { //The condition checks if the number exists in the row, column or 3x3 square.

                return false; //If the number is found it returns false.
            }
        }
        return true; //If the number does not exist in the row, column and 3x3 square, function returns true.
    }

    //This function will be filling the numbers of the puzzle using the previous helper function isSafe.
    function solve(cell = 0) { //cell parameter stands for each of the 81 cells in the Sudoku game table. The starting value is 0.
        if(cell === 81) { //Because the function is recursive if it calls itself with cell value being 81, it means the Sudoku board is fully filled.
            return true; // sudoku solved
        } else {
            let row = Math.floor(cell / 9); //row variable determines which row the current cell is located in.
            let col = cell % 9; //col variable determines which column the current cell is located in.

            if(board[row][col] !== 0) { //If the cell already has a value it skips the function calls itself again and increases the cell count by 1.
                return solve(cell + 1);
            } else {
                let nums = genareteRandomSequence(); //In order for the board to be randomized every time it is being generated, we pass it the function genareteRandomSequence.
                for(let num of nums) { //We loop through the number sequence provided by genareteRandomSequence() 
                    if(isSafe(row, col, num)) { //and for each of the numbers we apply helper function isSafe to check if the number can be applied.
                        board[row][col] = num; //If true the num value is applied to the cell (or rather the according location in the board array).
                        if(solve(cell + 1)) { //Through recursion the process is continued.
                            return true;
                        } else {
                            board[row][col] = 0; //If the number can not be applied it is reset to 0 to undo & try again
                        }
                    }
                }
                return false; // no valid numbers can be placed in this cell
            }
        }
    }

    solve();
    return board.flat();
}

export {generatePuzzle};
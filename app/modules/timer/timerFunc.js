let timerInterval; // Variable to store the interval ID
let startTime = 0; // Variable to store the start time
let pauseStatus = false; // Variable to store the pause status
let pauseBtn = document.getElementById('pause_btn'); // Pause button element
let grid = document.getElementById('game-grid'); // Variable for the grid
let gamePausedNotifier = document.getElementById('game_paused');

/**
 * Starts the timer by starting a new interval and updating the timer display.
 */
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

/**
 * Pauses the timer by clearing the interval.
 * Adds the stopped time to the result time display.
 */
function pauseTimer() {
  let resultTime = document.getElementById('result_time');
  resultTime.textContent = formatTime(startTime);
  if (timerInterval) {
    clearInterval(timerInterval); // Pause the timer by clearing the interval
    timerInterval = null;
  }
}
/**
 * Resets the timer by clearing the interval, 
 * sets the start time to 0,updates the timer display, 
 * resets the board and numpad visibility.
 */
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  updateTimer();
  pauseStatus = false;
  changeBoardVisibility();
  changeNumPadVisibility();
}

/**
 * Updates the timer display by formatting the time in minutes and seconds.
 * Increases the startTime variable by 1 to count time.
 */
function updateTimer() {
  let timerDisplay = document.getElementById('timer_counter');
  timerDisplay.textContent = formatTime(startTime);
  startTime++;
}

/**
 * 
 * @param {*number} seconds
 * @returns a formatted string of the time in minutes and seconds.
 */
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Changes the visibility of the num pad depending on the pause state.
 */
function changeNumPadVisibility() {
  let numPadBtn = document.querySelectorAll('.num-pad-item');
  
  for (let btn of numPadBtn) {
      if (pauseStatus) {
        btn.classList.add('paused');
      } else {
        btn.classList.remove('paused');
    }
  }
}

/**
 * Changes the visibility of the board depending on the pause state.
 */
function changeBoardVisibility() {
  
  for (let block of grid.children) {
    if (pauseStatus) {
      for (let square of block.children) {
        square.style.visibility = 'hidden';
        pauseBtn.innerText = '⏵';
        gamePausedNotifier.style.visibility = 'visible';
      }
    } else {
      for (let square of block.children) {
        square.style.visibility = 'visible';
        pauseBtn.innerText = '⏸';
        gamePausedNotifier.style.visibility = 'hidden';
      }
    }
  }
}

/**
 * Toggles the pause status between true and false.
 * Executes the startTimer or pauseTimer function depending on the pause status.
 * Executes the changeBoardVisibility or changeNumPadVisibility functions.
 */
pauseBtn.addEventListener('click', () => {

  if (!pauseStatus) {
    pauseTimer();
  } else {
    startTimer();
  }
  pauseStatus = !pauseStatus;
  changeBoardVisibility();
  changeNumPadVisibility();
});

export { startTimer, pauseTimer, resetTimer, pauseStatus };
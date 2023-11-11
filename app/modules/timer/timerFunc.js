let timerInterval; // Variable to store the interval ID
let startTime = 0; // Variable to store the start time
let pauseStatus = false; // Variable to store the pause status
let pauseBtn = document.getElementById('pause_btn'); // Pause button element
let grid = document.getElementById('game-grid');


function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
  console.log('Pause status on Start: ' + pauseStatus);
}

function pauseTimer() {
  let resultTime = document.getElementById('result_time');
  resultTime.textContent = formatTime(startTime);
  if (timerInterval) {
    clearInterval(timerInterval); // Pause the timer by clearing the interval
    timerInterval = null;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  updateTimer();
  pauseStatus = false;
  changeBoardVisibility();
}

function updateTimer() {
  let timerDisplay = document.getElementById('timer_counter');
  timerDisplay.textContent = formatTime(startTime);
  startTime++;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}



pauseBtn.addEventListener('click', () => {
  console.log('Pause status on click: ' + pauseStatus);
  if (!pauseStatus) {
    pauseTimer();
  } else {
    startTimer();
  }
  pauseStatus = !pauseStatus;
  console.log('Pause status after click: ' + pauseStatus);
  changeBoardVisibility();
});



function changeBoardVisibility() {
  
  for (let block of grid.children) {
    if (pauseStatus) {
      for (let square of block.children) {
        square.style.visibility = 'hidden';
        pauseBtn.innerText = '⏵'
      }
    } else {
      for (let square of block.children) {
        square.style.visibility = 'visible';
        pauseBtn.innerText = '⏸'
      }
    }
  }
}

export { startTimer, pauseTimer, resetTimer, pauseStatus };
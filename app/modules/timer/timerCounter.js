let timerInterval; // Variable to store the interval ID
let startTime = 0; // Variable to store the start time

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
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
}

function updateTimer() {
  let seconds = startTime;
  let timerDisplay = document.getElementById('timer_counter');
  timerDisplay.textContent = formatTime(seconds);

  startTime++;
}

function formatTime(seconds) {

  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

let pauseStatus = false;
let pauseBtn = document.getElementById('pause_btn');

pauseBtn.addEventListener('click', () => {
  if (!pauseStatus) {
    pauseTimer();
  } else {
    startTimer();
  }

  pauseStatus = !pauseStatus;
})

export { startTimer, pauseTimer, resetTimer };
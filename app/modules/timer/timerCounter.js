let timerInterval; // Variable to store the interval ID
let startTime = 0; // Variable to store the start time

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); // Update the timer every second
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
  updateTimer(); // Reset the timer display
}

function updateTimer() {
  const currentTime = Date.now() - startTime;
  const seconds = Math.floor(currentTime / 1000);
  // Display the timer value (you can update your HTML accordingly)
  const timerDisplay = document.getElementById('timer_counter');
  timerDisplay.textContent = formatTime(seconds);
}

function formatTime(seconds) {

  if (seconds.toString().length > 9) {
    seconds = 0;
  }

  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export { startTimer, pauseTimer, resetTimer };
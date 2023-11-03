export function timerDisplay(min, sec) {
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
    let timerElement = document.getElementById('timer_counter');
    timerElement.innerHTML = `${min}:${sec}`
}
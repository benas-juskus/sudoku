export function timerDisplay(min, sec, display) {
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
    display.innerHTML = `${min}:${sec}`
}
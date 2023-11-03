import { timerDisplay } from "./timerDisplay.js";

export function timerCounter(display){
    let min = 0;
    let sec = 1;
    let timer = setInterval(() => {
        timerDisplay(min, sec, display);
        sec++;
        if (sec > 59) {
            min++;
            sec = 0;
        }
    }, 1000);
}
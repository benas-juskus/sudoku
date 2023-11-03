import { timerDisplay } from "./timerDisplay.js";

export function timerCounter(){
    let min = 0;
    let sec = 1;
    let timer = setInterval(() => {
        timerDisplay(min, sec);
        sec++;
        if (sec > 59) {
            min++;
            sec = 0;
        }
    }, 1000);
}
const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

let timer = false;

const start = () => {
    timer = true;
    countDown();
}
const stop = () => {
    timer = false;
}
const reset = () => {
    timer = false;
    location.reload();
}
// hour - minute : minute - secode : second - hour
const countDown = () => {
    if (timer === true) {
        if (hour.value > 0 && minute.value == 0) {
            minute.value = 60;
            hour.value = hour.value - 1;
        }
        if(hour.value > 0 || minute.value > 0){
        if(second.value == 0){
          second.value = 60;
          minute.value = minute.value - 1;
        }
        if(second.value > 0){
            second.value = second.value - 1;
        }
        }else{
            if(second.value > 0){
                second.value = second.value - 1;
            }
            if(second.value == 0){
                timer = false; 
            }

        }

        setTimeout(countDown, 1000)
    }
}

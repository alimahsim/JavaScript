// console.log("Hello world!")

let deadline = '2023-05-03';
// let deadline2 = '2023-04-24';

function getTimerData(dl){
    let timeInBetween = Date.parse(dl) - Date.parse(new Date())
        days = Math.floor((timeInBetween / (1000 * 60 * 60 * 24))),
        hours = Math.floor((timeInBetween / (1000 * 60 * 60) %24)),
        minutes = Math.floor((timeInBetween / (1000 * 60) % 60)),
        seconds = Math.floor((timeInBetween / 1000) % 60);

//   console.log(timeInBetween);
//     console.log(days);
//     console.log(hours);
//     console.log(minutes);
//     console.log(seconds);
    if(timeInBetween < 0){
        return{
            timeInBetween: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    return{
        timeInBetween,
        days,
        hours,
        minutes,
        seconds
    }
}

function showTimer(showDl, parentSelector){
    let parentEl = document.querySelector(`.${parentSelector}`),
        daysEl = parentEl.querySelector('.days'),
        hoursEl = parentEl.querySelector('.hours'),
        minutesEl = parentEl.querySelector('.minutes'),
        secondsEl = parentEl.querySelector('.seconds');
    let timerId = setInterval(updateTimer, 1000)

    updateTimer()

    function updateTimer(){
        let timer = getTimerData(showDl)
      
            daysEl.innerHTML = addZero(timer.days),
            hoursEl.innerHTML = addZero(timer.hours),
            minutesEl.innerHTML = addZero(timer.minutes),
            secondsEl.innerHTML = addZero(timer.seconds)
        
        // if(timer.timeInBetween > 0){
        //     daysEl.innerHTML = addZero(timer.days),
        //     hoursEl.innerHTML = addZero(timer.hours),
        //     minutesEl.innerHTML = addZero(timer.minutes),
        //     secondsEl.innerHTML = addZero(timer.seconds)
        // }else{
        //     daysEl.innerHTML = "00"
        //     hoursEl.innerHTML = "00"
        //     minutesEl.innerHTML = "00"
        //     secondsEl.innerHTML = "00"
        // }
    }
}

function addZero(num){
    if(num < 10){
        return `0${num}`
    }else{
        return num;
    }
}

showTimer(deadline, "timer");
// showTimer(deadline2 , "timer1");

// console.log(getTimerData(deadline));
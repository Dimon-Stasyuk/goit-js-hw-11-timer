const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}


class CountdownTimer {
    constructor() {
       this.targetDate = 'Jul 20, 2019';
   }
    start() {        
        const targetDate = new Date(this.targetDate);
        const TimerTime = Date.now() - targetDate;
        const currentTime = new Date();
        setInterval(() => {
            
        const time = new Date() - currentTime;
        const deltaTime = TimerTime - time;
        const {days, hours, mins, secs} = getTimeComponents(deltaTime + 6)
            refs.days.textContent = days;
            refs.hours.textContent = hours;
            refs.mins.textContent = mins;
            refs.secs.textContent = secs;            
    }, 1000);
        }
    
}



const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 21, 2019'),
});
timer.start();


function getTimeComponents(time) {
const days =pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
const hours =pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) ;
const mins =pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))) ;
    const secs =pad(Math.floor((time % (1000 * 60)) / 1000)) ;
    return {days, hours, mins, secs}
}

function pad(value) {
    return String(value).padStart(2, '0');
}
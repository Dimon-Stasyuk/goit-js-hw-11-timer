class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.days = document.querySelector(`${this.selector} [data-value="days"]`);
    this.hours = document.querySelector(
      `${this.selector} [data-value="hours"]`
    );
    this.mins = document.querySelector(`${this.selector} [data-value="mins"]`);
    this.secs = document.querySelector(`${this.selector} [data-value="secs"]`);
  }
  start() {
    const TimerTime = Date.now() - this.targetDate;
    const currentTime = new Date();
    setInterval(() => {
      const time = new Date() - currentTime;
      const deltaTime = TimerTime - time;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime + 6);

      this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;
    }, 1000);
  }
  getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 26, 2019"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jul 26, 2021"),
});

timer.start();

function pad(value) {
  return String(value).padStart(2, "0");
}

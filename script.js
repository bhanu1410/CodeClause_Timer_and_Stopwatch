let timerInterval;
let stopwatchInterval;

function startTimer() {
    const timerInput = document.getElementById('timerInput');
    const timeInSeconds = parseInt(timerInput.value);

    if (!timeInSeconds || timeInSeconds <= 0) {
        alert('Please enter a valid time in seconds.');
        return;
    }

    let remainingTime = timeInSeconds;

    timerInterval = setInterval(() => {
        remainingTime--;
        timerInput.value = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert('Timer has finished.');
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function startStopwatch() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    stopwatchInterval = setInterval(() => {
        seconds++;

        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }

        const display = document.getElementById('stopwatchDisplay');
        display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    const display = document.getElementById('stopwatchDisplay');
    display.textContent = '00:00:00';
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

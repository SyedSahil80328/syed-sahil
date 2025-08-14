function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetTimeBoxAppearance() {
    document.getElementById('appear-hours').style.display = 'block';
    document.getElementById('appear-minutes').style.display = 'block';
    document.getElementById('appear-seconds').style.display = 'block';
    document.getElementById('starter').style.display = 'block';

}

async function stopper () {
    var alarm = document.getElementById('alarm');
    alarm.play();
    await sleep(1000);
    document.getElementById('timer-singer').style.display = 'block';
    document.getElementById('continue').style.display = 'none';
    document.getElementById('stop').style.display = 'none';

}

async function stopAlarmSound() {
    await sleep(1000);
    var alarm = document.getElementById('alarm');
    alarm.pause();
    alarm.currentTime = 0;  
    document.getElementById('timer-singer').style.display = 'none';
    resetTimeBoxAppearance();
}

let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isPaused = false;

function startTimer() {
    document.getElementById('starter').style.display = 'none';
    document.getElementById('continue').style.display = 'block';
    document.getElementById('stop').style.display = 'block';

    document.getElementById('appear-hours').style.display = 'none';
    document.getElementById('appear-minutes').style.display = 'none';
    document.getElementById('appear-seconds').style.display = 'none';

    document.getElementById('reset-hours').style.display = 'none';
    document.getElementById('reset-minutes').style.display = 'none';
    document.getElementById('reset-seconds').style.display = 'none';

    if (timerInterval) clearInterval(timerInterval);

    // Reset timer if it's already running
    hours = document.getElementById('hours').textContent*1;
    minutes = document.getElementById('minutes').textContent*1;
    seconds = document.getElementById('seconds').textContent*1;
    isPaused = false;
    updateDisplay();

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!isPaused) {
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                    } else {
                    // Timer is finished, stop the interval
                        clearInterval(timerInterval);
                        stopper();
                    }
            }
        }
        updateDisplay();
    }
}

function pauseTimer() {
    isPaused = true;
    document.getElementById('continue').innerHTML = "<button onclick='continueTimer();' class='normal-button'>CONTINUE</button>";
}

function continueTimer() {
    isPaused = false;
    document.getElementById('continue').innerHTML = "<button onclick='pauseTimer();' class='normal-button'>PAUSE</button>";
}

function stopTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;

    resetTimeBoxAppearance();
    document.getElementById('continue').innerHTML = "<button onclick='pauseTimer();' class='normal-button'>PAUSE</button>";
    document.getElementById('continue').style.display = 'none';
    document.getElementById('stop').style.display = 'none';

    isPaused = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').textContent = (hours<10) ? `0${hours}` : `${hours}`;
    document.getElementById('minutes').textContent = (minutes<10) ? `0${minutes}` : `${minutes}`;
    document.getElementById('seconds').textContent = (seconds<10) ? `0${seconds}` : `${seconds}`;
}
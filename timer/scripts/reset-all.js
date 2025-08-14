const zeroTimer = '00';
const zeroDisplayStyle = 'none';

function resetHours() {
    document.getElementById('hours').textContent = zeroTimer;
    document.getElementById('reset-hours').style.display = zeroDisplayStyle;
}

function resetMinutes() {
    document.getElementById('minutes').textContent = zeroTimer;
    document.getElementById('reset-minutes').style.display = zeroDisplayStyle;
}

function resetSeconds() {
    document.getElementById('seconds').textContent = zeroTimer;
    document.getElementById('reset-seconds').style.display = zeroDisplayStyle;
}
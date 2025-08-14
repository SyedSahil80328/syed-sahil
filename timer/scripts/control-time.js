var setHours=0, setMinutes=0, setSeconds=0;
function incrementHours () {
    setHours = document.getElementById('hours').textContent*1 + 1;
    resetHourStyle = document.getElementById('reset-hours');
    
    if (setHours == 24)  setHours = 0;
    let newSetHours = (setHours<10) ? `0${setHours}` : `${setHours}`;
    resetHourStyle.style.display = (setHours==0) ? 'none' : 'block';

    document.getElementById('hours').innerHTML = newSetHours;
}

function decrementHours () {
    setHours = document.getElementById('hours').textContent*1 - 1;
    resetHourStyle = document.getElementById('reset-hours');
    
    if (setHours == -1) setHours = 23;
    let newSetHours = (setHours<10) ? `0${setHours}` : `${setHours}`;
    resetHourStyle.style.display = (setHours==0) ? 'none' : 'block';

    document.getElementById('hours').innerHTML = newSetHours;
}

function incrementMinutes () {
    setMinutes = document.getElementById('minutes').textContent*1 + 1;
    resetMinutesStyle = document.getElementById('reset-minutes');
    
    if (setMinutes == 60)  setMinutes = 0;
    let newSetMinutes = (setMinutes<10) ? `0${setMinutes}` : `${setMinutes}`;
    resetMinutesStyle.style.display = (setMinutes==0) ? 'none' : 'block';

    document.getElementById('minutes').innerHTML = newSetMinutes;
}

function decrementMinutes () {
    setMinutes = document.getElementById('minutes').textContent*1 - 1;
    resetMinutesStyle = document.getElementById('reset-minutes');
    
    if (setMinutes == -1) setMinutes = 59;
    let newSetMinutes = (setMinutes<10) ? `0${setMinutes}` : `${setMinutes}`;
    resetMinutesStyle.style.display = (setMinutes==0) ? 'none' : 'block';

    document.getElementById('minutes').innerHTML = newSetMinutes;
}

function incrementSeconds () {
    setSeconds = document.getElementById('seconds').textContent*1 + 1;
    resetSecondsStyle = document.getElementById('reset-seconds');
    
    if (setSeconds == 60)  setSeconds = 0;
    let newSetSeconds = (setSeconds<10) ? `0${setSeconds}` : `${setSeconds}`;
    resetSecondsStyle.style.display = (setSeconds==0) ? 'none' : 'block';

    document.getElementById('seconds').innerHTML = newSetSeconds;
}

function decrementSeconds () {
    setSeconds = document.getElementById('seconds').textContent*1 - 1;
    resetSecondsStyle = document.getElementById('reset-seconds');
    
    if (setSeconds == -1) setSeconds = 59;
    let newSetSeconds = (setSeconds<10) ? `0${setSeconds}` : `${setSeconds}`;
    resetSecondsStyle.style.display = (setSeconds==0) ? 'none' : 'block';

    document.getElementById('seconds').innerHTML = newSetSeconds;
}

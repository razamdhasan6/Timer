let minatEle = document.querySelector('.minat');
let secoundEle = document.querySelector('.secound');
let mSecoundEle = document.querySelector('.m-sec');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

let minat = 0;
let secound = 0;
let mSecound = 0;
let intervalId = '';

let startTimer = () => {
    mSecound++;
    if (mSecound === 100) {
        mSecound = 0;
        secound++;
        if (secound === 60) {
            secound = 0;
            minat++;
        }
    }

    mSecoundEle.textContent = mSecound < 10 ? `0${mSecound}` : mSecound;
    secoundEle.textContent = secound < 10 ? `0${secound}:` : `${secound}:`;
    minatEle.textContent = minat < 10 ? `0${minat}:` : `${minat}:`;
};

let formatTime = () => {
    return `${minat < 10 ? `0${minat}` : minat}:${secound < 10 ? `0${secound}` : secound}:${mSecound < 10 ? `0${mSecound}` : mSecound}`;
};

startBtn.addEventListener('click', () => {
    intervalId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    // Format the current timer value
    let currentTime = `Timer stopped at: ${formatTime()}`;

    // Check if a div with the same content already exists
    let existingTimerValue = Array.from(document.querySelectorAll('.timer-value'))
        .some(timerValue => timerValue.textContent === currentTime);

    if (!existingTimerValue) {
        let timerValue = document.createElement('div');
        timerValue.textContent = currentTime;
        timerValue.classList.add('timer-value');
        document.querySelector('.container').appendChild(timerValue);
    }
});


resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    mSecoundEle.textContent = "00";
    secoundEle.textContent = "00:";
    minatEle.textContent = "00:";

    // Remove all timer-value divs
    document.querySelectorAll('.timer-value').forEach(timerValue => timerValue.remove());
});

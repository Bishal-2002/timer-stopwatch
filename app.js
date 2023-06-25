// Stopwatch
let stopwatchInterval
let stopwatchSeconds = 0

const startStopwatch = () => {stopwatchInterval = setInterval(incrementStopwatch, 1000)}
const pauseStopwatch = () => {clearInterval(stopwatchInterval)}
const resetStopwatch = () => {
    clearInterval(stopwatchInterval)
    stopwatchSeconds = 0
    updateStopwatchDisplay()
}

const incrementStopwatch = () => {
    stopwatchSeconds++;
    updateStopwatchDisplay()
}

const updateStopwatchDisplay = () => {
    let hours = Math.floor(stopwatchSeconds / 3600).toString().padStart(2, '0')
    let minutes = Math.floor((stopwatchSeconds % 3600) / 60).toString().padStart(2, '0')
    let seconds = Math.floor(stopwatchSeconds % 60).toString().padStart(2, '0')
    document.querySelector('#stopwatch-display').textContent = `${hours}:${minutes}:${seconds}`
}

const startStopwatchButton = document.querySelector('#start-stopwatch')
const pauseStopwatchButton = document.querySelector('#pause-stopwatch')
const resetStopwatchButton = document.querySelector('#reset-stopwatch')

startStopwatchButton.addEventListener('click', startStopwatch)
pauseStopwatchButton.addEventListener('click', pauseStopwatch)
resetStopwatchButton.addEventListener('click', resetStopwatch)

// Timer
let timerInterval, startTime, timerSeconds

const timerInputButton = document.querySelector('#timer-input')
timerInputButton.addEventListener('blur', () => {
    startTime = parseInt(timerInputButton.value, 10)
    if(!isNaN(startTime) && startTime > 0){
        timerSeconds = startTime
        updateTimerDisplay()
    }
    else    alert('Enter valid time in seconds!')
}) 

const startTimer = () => {
    updateTimerDisplay()
    timerInterval = setInterval(decrementTimer, 1000)
}

const pauseTimer = () => {clearInterval(timerInterval)}
const resetTimer = () => {
    clearInterval(timerInterval)
    startTime = 0
    timerSeconds = 0
    updateTimerDisplay()
}

const decrementTimer = () => {
    if(timerSeconds > 0){
        timerSeconds--
        updateTimerDisplay()
    }
    else{
        clearInterval(timerInterval)
        alert("Timer is completed!")
    }
}

const updateTimerDisplay = () => {
    let hours = Math.floor(timerSeconds / 3600).toString().padStart(2, '0')
    let minutes = Math.floor((timerSeconds % 3600) / 60).toString().padStart(2, '0')
    let seconds = Math.floor(timerSeconds % 60).toString().padStart(2, '0')
    document.querySelector('#timer-display').textContent = `${hours}:${minutes}:${seconds}`
}

const startTimerButton = document.querySelector('#start-timer')
const pauseTimerButton = document.querySelector('#pause-timer')
const resetTimerButton = document.querySelector('#reset-timer')

startTimerButton.addEventListener('click', startTimer)
pauseTimerButton.addEventListener('click', pauseTimer)
resetTimerButton.addEventListener('click', resetTimer)

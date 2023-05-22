import { Sounds } from './sounds.js'

export function Timer (
  minutesDisplay,
  secondsDisplay,
  buttonPlay
) {

  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)
  
  function countdown () {
    timerTimeout = setTimeout(function () {
     let minutes = Number(minutesDisplay.textContent)
     let seconds = Number(secondsDisplay.textContent)
     let isFinished = minutes <= 0 && seconds <= 0
   
     if (isFinished) {
       resetTimer()
       updateDisplay()
       Sounds().timeEnd()
       return
     }
   
     if (seconds <= 0) {
       seconds = 60
       --minutes
     }
   
   updateDisplay(minutes, String(seconds -1))
   
   countdown()
    }, 1000)
   }
   
   function updateDisplay (newMinutes, seconds) {
     newMinutes = newMinutes === undefined ? minutes : newMinutes
     seconds = seconds === undefined ? 0 : seconds
     minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
     secondsDisplay.textContent = String(seconds).padStart(2,'0')
   }
   
   function resetTimer () {
     updateDisplay(minutes, 0)
     clearTimeout(timerTimeout)
   }
   
   function addMinutes () {
     minutes = minutes + 5
     updateDisplay(minutes, 0)
   }
   
   function subMinutes () {
     if (minutes <= 5) {
       resetTimer()
       buttonPlay.disabled = false;
       return
     }
     
     minutes = minutes - 5
     updateDisplay(minutes, 0)
   }

return {
  countdown,
  updateDisplay,
  resetTimer,
  addMinutes,
  subMinutes
}

}


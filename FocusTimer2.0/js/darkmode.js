import { 
  buttonPlay,
  buttonStop,
  buttonAddMinutes,
  buttonSubMinutes,
  svgForestOff,
  svgRainOff,
  svgCoffeeshopOff,
  svgFireOff,
  buttonLightMode,
  buttonDarkMode,
  minutesDisplay,
  secondsDisplay,
  twodots
  } from './config.js'

export function changeMode () {
  buttonLightMode.classList.toggle('hide')
  buttonDarkMode.classList.toggle('hide')
  document.body.classList.toggle('darkmode')
  minutesDisplay.classList.toggle('darkmode')
  secondsDisplay.classList.toggle('darkmode')
  twodots.classList.toggle('darkmode')
  
  buttonPlay.classList.toggle('whitecontrol')
  buttonStop.classList.toggle('whitecontrol')
  buttonAddMinutes.classList.toggle('whitecontrol')
  buttonSubMinutes.classList.toggle('whitecontrol')
  
  svgForestOff.classList.toggle('firstsvg')
  svgRainOff.classList.toggle('firstsvg')
  svgCoffeeshopOff.classList.toggle('firstsvg')
  svgFireOff.classList.toggle('firstsvg')
}


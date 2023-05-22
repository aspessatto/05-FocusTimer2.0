import { 
  buttonPlay,
  buttonStop,
  buttonAddMinutes,
  buttonSubMinutes,
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFire,
  svgForestOff,
  svgForestOn,
  svgRainOff,
  svgRainOn,
  svgCoffeeshopOff,
  svgCoffeeshopOn,
  svgFireOff,
  svgFireOn,
  buttonLightMode,
  buttonDarkMode,
  } from './config.js'
import { changeMode } from './darkmode.js';


export function Events (
timer,
sounds,
) {

  buttonPlay.addEventListener('click', () => {
    timer.countdown()
    buttonPlay.disabled = true;
    sounds.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    timer.resetTimer()
    buttonPlay.disabled = false;
    sounds.pressButton()
  })

  buttonAddMinutes.addEventListener('click', () => {
    timer.addMinutes()
    sounds.pressButton()
  })

  buttonSubMinutes.addEventListener('click', () => {
    timer.subMinutes()
    sounds.pressButton()
  })

  buttonForest.addEventListener('click', () => {
    sounds.togglePlay(sounds.forestAudio)
    svgForestOff.classList.toggle('hide')
    svgForestOn.classList.toggle('hide')
  })

  buttonRain.addEventListener('click', () => {
    sounds.togglePlay(sounds.rainAudio)
    svgRainOff.classList.toggle('hide')
    svgRainOn.classList.toggle('hide')
  })

  buttonCoffeeshop.addEventListener('click', () => {
    sounds.togglePlay(sounds.coffeeAudio)
    svgCoffeeshopOff.classList.toggle('hide')
    svgCoffeeshopOn.classList.toggle('hide')
  })
  
  buttonFire.addEventListener('click', () => {
    sounds.togglePlay(sounds.fireAudio)
    svgFireOff.classList.toggle('hide')
    svgFireOn.classList.toggle('hide')
  })

  buttonLightMode.addEventListener('click', () => {
    changeMode()
    sounds.pressButton()
  })

  buttonDarkMode.addEventListener('click', () => {
    changeMode()
    sounds.pressButton()
  })

}
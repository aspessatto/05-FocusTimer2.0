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
  svgFireOn
  } from './config.js'


export function Events (
timer,
sounds,
) {

  buttonPlay.addEventListener('click', function () {
    timer.countdown()
    buttonPlay.disabled = true;
    sounds.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    timer.resetTimer()
    buttonPlay.disabled = false;
    sounds.pressButton()
  })

  buttonAddMinutes.addEventListener('click', function () {
    timer.addMinutes()
    sounds.pressButton()
  })

  buttonSubMinutes.addEventListener('click', function () {
    timer.subMinutes()
    sounds.pressButton()
  })

  buttonForest.addEventListener('click', function () {
    sounds.togglePlay(sounds.forestAudio)
    svgForestOff.classList.toggle('hide')
    svgForestOn.classList.toggle('hide')
  })

  buttonRain.addEventListener('click', function() {
    sounds.togglePlay(sounds.rainAudio)
    svgRainOff.classList.toggle('hide')
    svgRainOn.classList.toggle('hide')
  })

  buttonCoffeeshop.addEventListener('click', function() {
    sounds.togglePlay(sounds.coffeeAudio)
    svgCoffeeshopOff.classList.toggle('hide')
    svgCoffeeshopOn.classList.toggle('hide')
  })
  
  buttonFire.addEventListener('click', function() {
    sounds.togglePlay(sounds.fireAudio)
    svgFireOff.classList.toggle('hide')
    svgFireOn.classList.toggle('hide')
  })
}




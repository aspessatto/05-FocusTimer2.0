export {
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
  minutesDisplay,
  secondsDisplay,
}

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.add-minutes')
const buttonSubMinutes = document.querySelector('.sub-minutes')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeshop = document.querySelector('.coffeeshop')
const buttonFire = document.querySelector('.fire')
const svgForestOff = document.querySelector('.forestOff')
const svgForestOn = document.querySelector('.forestOn')
const svgRainOff = document.querySelector('.rainOff')
const svgRainOn = document.querySelector('.rainOn')
const svgCoffeeshopOff = document.querySelector('.coffeeshopOff')
const svgCoffeeshopOn = document.querySelector('.coffeeshopOn')
const svgFireOff = document.querySelector('.fireOff')
const svgFireOn = document.querySelector('.fireOn')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
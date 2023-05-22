import { Sounds } from './sounds.js'

import { Timer } from './timer.js'

import { Events } from './events.js'

import {
  buttonPlay,
  minutesDisplay,
  secondsDisplay,
} from './config.js'

const sounds = Sounds()

const timer = Timer(
  minutesDisplay,
  secondsDisplay,
  buttonPlay
)

Events (timer, sounds)



const robot = require('robotjs')
const NanoTimer = require('nanotimer')
var timer = new NanoTimer()

const cactus = {
  x: 350,
  y: 500,
}
const bird = {
  x: 340,
  y: 440,
}

robot.dragMouse(bird.x, bird.y)

function main() {
  if ('acacac' === getPixelColor(cactus.x, cactus.y)) {
    robot.keyTap('space')
    return
  }
  if ('acacac' === getPixelColor(cactus.x + 2, cactus.y)) {
    robot.keyTap('space')
    return
  }
  if ('acacac' === getPixelColor(cactus.x - 2, cactus.y)) {
    robot.keyTap('space')
    return
  }
  if ('acacac' === getPixelColor(cactus.x - 1, cactus.y)) {
    robot.keyTap('space')
    return
  }
  if ('acacac' === getPixelColor(cactus.x + 1, cactus.y)) {
    robot.keyTap('space')
    return
  }
  //   if (getPixelColor(bird.x, bird.y) === 'acacac') {
  //     robot.keyToggle('down', 'down')
  //     setTimeout(() => {
  //       robot.keyToggle('down', 'up')
  //     }, 1000)
  //     return
  //   }
}

timer.setInterval(main, '', '1m')

function getPixelColor(x, y) {
  return robot.getPixelColor((x / 1536) * 1920, (y / 864) * 1080)
}

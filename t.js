const robot = require('robotjs')

setInterval(() => {
  const pos = robot.getMousePos()
  console.log(getPixelColor(pos.x, pos.y))
}, 1)

function getPixelColor(x, y) {
  return robot.getPixelColor((x / 1536) * 1920, (y / 864) * 1080)
}

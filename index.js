const robot = require('robotjs')

const cactus = {
	x: 350,
	y: 520,
}
const bird = {
	x: 340,
	y: 440,
}

robot.dragMouse(cactus.x, cactus.y)

setInterval(() => {
	for (let i = -10; i <= 10; i++) {
		if ('535353' === getPixelColor(cactus.x, cactus.y + i)) {
			robot.keyTap('space')
			return
		} else if ('535353' === getPixelColor(cactus.x + i, cactus.y)) {
			robot.keyTap('space')
			return
		} else if (getPixelColor(bird.x + i, bird.y) === '535353') {
			robot.keyToggle('down', 'down')
			setTimeout(() => {
				robot.keyToggle('down', 'up')
			}, 1000)
			return
		}
	}
}, 1)

function getPixelColor(x, y) {
	return robot.getPixelColor((x / 1536) * 1920, (y / 864) * 1080)
}

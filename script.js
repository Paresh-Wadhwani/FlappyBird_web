document.addEventListener
(
	'DOMContentLoaded',
	() =>
	{
		const bird = document.querySelector('.bird')
		const viewPort = document.querySelector('.game-container')
		const ground = document.querySelector('.ground')

		let birdLeft = 220
		let birdBottom = 100

		startGame = () => {
			bird.style.left = birdLeft		//No need to append px as it is the default unit
			bird.style.bottom = birdBottom
		}

		startGame()

	}
)
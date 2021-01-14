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
		let gravity = 2


		const startGame = () =>
		{
			birdBottom -= gravity
			bird.style.bottom = birdBottom
		}

		const jump = () =>
		{
			if (birdBottom < 500)
			birdBottom += 50
			bird.style.bottom = birdBottom
		}

		bird.style.left = birdLeft

		let var1 = setInterval(startGame, 20)

		document.addEventListener
		(
			'keypress',
			jump
		)
		
		
		// clearInterval(gameTimer)
	}
)
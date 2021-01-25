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

		const control = (e) =>
		{
			if (e.key == ' ')
			{
				jump()
			}
		}

		const startGame = () =>
		{
			if (birdBottom > 0)
				birdBottom -= gravity
			bird.style.bottom = birdBottom
		}

		const jump = () =>
		{
			if (birdBottom < 500)
			{
				birdBottom += 50
				bird.style.bottom = birdBottom
			}
		}

		bird.style.left = birdLeft

		let gameTimer = setInterval(startGame, 20)

		document.addEventListener
		(
			'keypress',
			control
		)

		const generateObstacle = () =>
		{
			var randomHeight = Math.random() * 200 - 50

			var obstacleLeft = 500
			var obstacleBottom = randomHeight

			const topObstacle = document.createElement('div')
			const bottomObstacle = document.createElement('div')

			topObstacle.classList.add('obstacle')
			bottomObstacle.classList.add('obstacle')

			viewPort.appendChild(topObstacle)
			viewPort.appendChild(bottomObstacle)

			topObstacle.style.left = obstacleLeft
			bottomObstacle.style.left = obstacleLeft
			topObstacle.style.bottom = obstacleBottom
			bottomObstacle.style.bottom = obstacleBottom + 500

			const moveObstacle = () =>
			{
				obstacleLeft -= 2

				topObstacle.style.left = obstacleLeft
				bottomObstacle.style.left = obstacleLeft

				if (obstacleLeft == -60)
				{
					clearInterval(obstacleTimer)

					viewPort.removeChild(topObstacle)
					viewPort.removeChild(bottomObstacle)
				}
			}

			const obstacleTimer = setInterval(moveObstacle, 20)
			setTimeout(generateObstacle, 3000)
		}

		generateObstacle()
		
		
		// clearInterval(gameTimer)
	}
)
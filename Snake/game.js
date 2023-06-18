import {updateSnake, drawApple, updateApple, drawSnake, SNAKE_SPEED, outsideGrid, getSnakeHead, snakeIntersection} from "./Snake.js"



const gameBoard = document.getElementById('game-board')

let gameOver = false
let lastRenderTime = 0

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }
        return
    }

    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime



    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateApple()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawApple(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}





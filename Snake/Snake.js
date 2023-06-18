const score = document.getElementById("score")

export const SNAKE_SPEED = 5

let newSegments = 0

let food = getRandomNumberBetween()

let inputDirection = {x: 0, y:0}
let lastInputDirection = {x: 0, y:0}

const snakeBody = [{x: 11, y: 11}]

export function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snakes')
        gameBoard.appendChild(snakeElement)
    })
}

function expandSnake(amount) {
    newSegments += amount
}

function addSegements() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}

function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return isCollision(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
}

export function snakeIntersection () {
    return onSnake(snakeBody[0], {ignoreHead: true})
}
        


window.addEventListener("keydown",  e => {
    switch(e.key) {
        case "w":
            if (lastInputDirection.y !== 0) break
            inputDirection = {x : 0, y: -1}
            break
        case "s":
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case "a":
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break
        case "d":
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break
    }
})



function getInputDirection () {
    lastInputDirection = inputDirection
    return inputDirection
}

export function drawApple(gameBoard) {
    const newApple = document.createElement('div')
    newApple.style.gridRowStart =  food.y
    newApple.style.gridColumnStart =  food.x
    newApple.classList.add("apple")
    gameBoard.appendChild(newApple)
}

export function updateSnake() {    
    addSegements()
    const inputDirection = getInputDirection()

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function updateApple() {
    if (onSnake(food)) {
        food = getRandomNumberBetween()
        score.textContent = parseInt(score.textContent) + 1
        expandSnake(2)
    }
}

function isCollision(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function getRandomNumberBetween() {
    let newFoodPosition
    while (newFoodPosition == null) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}




    





    
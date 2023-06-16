

const score = document.getElementById("score")

let speed = 0.2
let temp = ""

let snakeBody = []

export default class Snake {
    constructor(snakeElem) {
       
        this.snakeElem = snakeElem
    }

    get DIRECTION() {
        return getComputedStyle(this.snakeElem).getPropertyValue("--DIRECTION")
    }

    set DIRECTION(value) {
        this.snakeElem.style.setProperty("--DIRECTION", value)
    }

   

    create(snake) {
        let newDiv = this.snakeElem
        

        console.log(newDiv)

       
    
    }


    get x() {
        return parseFloat(getComputedStyle(this.snakeElem).getPropertyValue("--x"))
    }

    set x(value) {
        this.snakeElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.snakeElem).getPropertyValue("--y"))
    }

    set y(value) {
        this.snakeElem.style.setProperty("--y", value)
    }

    rect() {
        return this.snakeElem.getBoundingClientRect()
    }
    
    listen() {
        document.addEventListener("keyup",  key => {
            if (key.keyCode === 87 && this.DIRECTION !== "DOWN" && this.DIRECTION !== "UP"  ) this.DIRECTION = "UP"
            if (key.keyCode === 83 && this.DIRECTION !== "UP"  && this.DIRECTION !== "DOWN") this.DIRECTION = "DOWN"
            if (key.keyCode === 65 && this.DIRECTION !== "RIGHT" && this.DIRECTION !== "LEFT") this.DIRECTION = "LEFT"
            if (key.keyCode === 68 && this.DIRECTION !== "LEFT" && this.DIRECTION !== "RIGHT") this.DIRECTION = "RIGHT"
        })

        
    }

    reset (apple) {
        this.x = 50
        this.y = 50
        this.DIRECTION = "IDLE"
        score.textContent = 0
        apple.spawn()
    }

    spawn() {
        this.x = getRandomNumberBetween(10, 20)
        this.y = getRandomNumberBetween(10, 20)
    }

    update (apple) {
        this.listen()
        let rect = this.rect()
        let appleRect = apple.rect()
        if (this.DIRECTION === "UP") {
            this.y -= speed
        }

        if (this.DIRECTION === "LEFT" ) {
            this.x -= speed

        }

        if (this.DIRECTION === "RIGHT") {
            this.x += speed



        }

        if (this.DIRECTION === "DOWN") {
            this.y += speed


        }

        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.reset(apple)
        }

        if (rect.right >= window.innerWidth || rect.left <= 0) {
            this.reset(apple)
        }

        if (isCollision(rect, appleRect)) {
            apple.spawn()
            score.textContent = parseInt(score.textContent) + 1
            this.create(this)
        }


    }


}

function isCollision(rect1, rect2) {
    return (
        rect1.left <= rect2.right && 
        rect1.right >= rect2.left && 
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    )
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) * min)
}
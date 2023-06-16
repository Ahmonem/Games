import Snake from "./Snake.js"
import Apple from "./Apple.js"


const snake = new Snake(document.getElementById("snake"))
const apple = new Apple(document.getElementById("apple"))

let ate = false

function update() {
    if (!ate) {
        apple.spawn()
        ate = true
    }
    snake.update(apple)

    window.requestAnimationFrame(update)
}





window.requestAnimationFrame(update)
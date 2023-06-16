export default class Apple {
    constructor(appleElem) {
        this.appleElem = appleElem
    }

    rect() {
        return this.appleElem.getBoundingClientRect()
    }

    get x() {
        return parseFloat(getComputedStyle(this.appleElem).getPropertyValue("--x"))
    }

    set x(value) {
        this.appleElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.appleElem).getPropertyValue("--y"))
    }

    set y(value) {
        this.appleElem.style.setProperty("--y", value)
    }

    spawn() {
        this.x = getRandomNumberBetween(10, 20)
        this.y = getRandomNumberBetween(10, 20)
    }

    

}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) * min)
}
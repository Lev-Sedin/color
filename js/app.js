const board = document.querySelector("#board")
const text = document.querySelector("h1")
const colors = ["#81D8D0", "#FFDB58", "#FFCC99", " #FF4040", "#E6E6FA", "#5E2129"]
const SQUARES_NUMBER = 500

for (let i = 0 ; i < SQUARES_NUMBER ; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseleave", () => removeColor(square))
    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000 `
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


/*text.classList.add("title")
text.addEventListener("mouseover", () => setColor(square))
text.addEventListener("mouseleave", () => removeColor(square))*/
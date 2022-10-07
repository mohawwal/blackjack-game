let player = {
    name : "PLAYER",
    chips : 2000
}
let firstcard = getrandomcard()
let secondcard = getrandomcard()
let sum = firstcard + secondcard
let cards =[firstcard, secondcard]

let isAlive = false
let hasBlackjack = false
let gameOver = false

let messageEL = document.getElementById("message-el")
let cardEL = document.getElementById("card-el")
let sumEL = document.getElementById("sum-el")
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": " + "$" + player.chips



function startgame() {
    rendergame()
}

function getrandomcard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }
    return randomNumber
    
}

function rendergame() {
    sumEL.textContent = "SUM:- " + sum
    cardEL.textContent = "CARDS:- "
    for (let i = 0; i < cards.length; i+=1) {
        cardEL.textContent += (cards[i]) + " ,"
    }
    
    if (sum < 21) {
        message = "DO YOU WANT TO DRAW A NEW CARD"
        isAlive = true
        hasBlackjack = false
        gameOver = false
    } else if (sum === 21) {
        message = "YOU JUST WON ABLACKJACK"
        hasBlackjack = true
        wonChip = true
        won()
    } else {
        message = "YOU LOST, YOU ARE OUT OF THE GAME"
        isAlive = false
        gameOver = true
        wonChip = false
        won()
    }
    messageEL.textContent = message
}

function won() {
    if (wonChip === true) {
        playerEL.textContent = player.name + ": " + "$" + player.chips*2
    } else if (wonChip === false) {
        playerEL.textContent = player.name + ": " + "$" + player.chips/2000
    }
}
function restart() {
    if (gameOver === true) {
        messageEL.textContent = "NOT ENOUGH $MONEY TO CONTINUE, RESTART GAME TO TRY AGAIN"
    }
}

function newcard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = 10
    sum += card
    cards.push(card)
    rendergame()
    } else if (gameOver === true) {
        restart()
    }
}
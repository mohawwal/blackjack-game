let cardSum = 0;
let cards = [] 
let cardEL = document.querySelector(".card");
let sumEL = document.querySelector(".sum");
let updateEL = document.querySelector(".update")
let hasBlackJack = false
let isAlive = false
let gameStarted = false
let message = ""


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startgame() {
    if (gameStarted === false) {
        isAlive = true
        gameStarted = true
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cardSum = firstCard + secondCard
        cards = [firstCard, secondCard]
        renderGame()
    }
}


function renderGame() {
    cardEL.textContent = "";
    for (let i = 0; i < cards.length; i++) {
        cardEL.textContent += " - " + cards[i]
    }


    sumEL.textContent = cardSum;
    if (cardSum <= 20) {
        hasBlackJack = false
        isAlive = true
        message = "Pick a new card"
        updateEL.textContent = message
    } else if (cardSum == 21) {
        message = "You won a black jack"
        hasBlackJack = true
        updateEL.textContent = message
    } else {
        message = "you are out"
        isAlive = false
        updateEL.textContent = message
    }
}


function newcard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();
        cardSum += card
        cards.push(card)
        renderGame()
    }   
}
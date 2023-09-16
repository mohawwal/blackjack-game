const cardList = document.querySelector(".cardList");
const pickCardMsg = document.querySelector(".pickCardMsg");
const cardUpdate = document.querySelector(".cardUpdate");
const pickCardBtn = document.querySelector(".pickCardBtn");
const reStart = document.querySelector(".reStart");

let cardSum = 0;
let allCards = [];
let hasBlackJack = false;
let isAlive = false;
let gameStarted = false;
let message = "";

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  gameStarted = true;
  cardSum = 0;
  allCards = [];
  cardList.textContent = "________";
  message = "";
  renderGame();
}

function renderGame() {
  pickCardMsg.textContent = "";
  for (let i = 0; i < allCards.length; i++) {
    pickCardMsg.textContent += `${allCards[i]} - `;
  }

  if (cardSum <= 20) {
    hasBlackJack = false;
    isAlive = true;
    message = "Pick a new card";
    cardList.textContent = message;
  } else if (cardSum == 21) {
    message = "You won a black jack";
    hasBlackJack = true;
    cardList.textContent = message;
  } else {
    message = "you are out";
    isAlive = false;
    cardList.textContent = message;
  }
}

function newCard() {
  if (hasBlackJack == false && isAlive == true) {
    let nextCard = getRandomCard();
    cardSum += nextCard;
    allCards.push(nextCard);
    renderGame();
  }
}

reStart.addEventListener("click", function () {
  startGame();
});
startGame();


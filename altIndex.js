let player = {
  name: "Renato",
  chips: 145,
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let canStartGame = true;

playerEl.textContent += player.name + ": " + player.chips + "$";
function startGame() {
  if (canStartGame === true) {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
    canStartGame = false;
  } else {
    messageEl.textContent = "You are already in a game, sir!";
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "You Got Nothing, man!";
  } else if (sum == 21) {
    message = "You Got BlackJack!!!";
    hasBlackjack = true;
    canStartGame = true;
  } else {
    message = "You outta game!";
    isAlive = false;
    canStartGame = true;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (hasBlackjack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    messageEl.textContent = "You Can't Draw Anymore Cards!!";
  }
}

function getRandomCard() {
  let cardNumber = Math.floor(Math.random() * 13 + 1);
  if (cardNumber === 1) {
    return 11;
  } else if (cardNumber > 10) {
    return 10;
  } else return cardNumber;
}

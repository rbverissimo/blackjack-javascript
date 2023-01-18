let firstCard = 0;
let secondCard = 0;
let printResult = document.getElementById("print-result");
let plrMoney = document.querySelector("#plr-money"); //must be more specific in the querySelector;
let message = "";
let hasBlackjack = false;
let isAlive = true;
let playerMoney = 10;

document.getElementById("plr-money").textContent += playerMoney + "$";
function takeRound(sumCards) {
  if (sumCards === 21) {
    hasBlackjack = true;
    message = "You Got Blackjack!!!";
    playerMoney = playerMoney * 7;
  } else if (sumCards > 21) {
    isAlive = false;
    message = "You OUT, scum!!!!";
  } else {
    message = "Do you want another draw?";
  }
  printResult.textContent = message;
}

function draw() {
  if (playerMoney === 0 && isAlive === true) {
    document.getElementById("no-money").innerHTML =
      " <button> Give Me More Money </button>";
  }
  if (playerMoney <= 0) {
    return (printResult.textContent = "Sorry, no money!");
  } else if (isAlive != false) {
    playerMoney -= 1;
    plrMoney.textContent = "Your Money: " + playerMoney + "$";
    firstCard = Math.floor(Math.random() * 10 + 2);
    document.getElementById("first-card").textContent = firstCard;
    secondCard = Math.floor(Math.random() * 10 + 2);
    document.getElementById("second-card").textContent = secondCard;
    let sumCards = firstCard + secondCard;
    takeRound(sumCards);
  } else {
    printResult.textContent = "Sorry, you out of the game";
    document.getElementById("restart").innerHTML = "<button> Restart </button>";
  }
}

function restart() {
  playerMoney = 10;
  plrMoney.textContent = "Your Money: " + playerMoney + "$";
  isAlive = true;
  document.getElementById("restart").innerHTML = "";
}

function noMoney() {
  playerMoney += 3;
  plrMoney.textContent = "Your Money: " + playerMoney + "$";
  document.getElementById("no-money").innerHTML = "";
}

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/joker.jpg";

let timerButtonLabel = document.getElementById("label");
let timerLabel = document.getElementById("countdown");
let timerButton = document.getElementById("b2");
let randomCardButton = document.getElementById("b1");
let setCardButton = document.getElementById("b3");
let image = document.getElementById("imageId");
let cardNumberLabelTop = document.getElementById("cardNumberTop");
let cardNumberLabelBottom = document.getElementById("cardNumberBottom");
let cardSymbolLabelTop = document.getElementById("cardIconTop");
let cardSymbolLabelBottom = document.getElementById("cardIconBottom");
let cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "Joker"
];
let cardSymbols = ["♦", "♥", "♠", "♣"];
let timeCounter = 10;
let timeleft = timeCounter;

window.onload = function() {
  console.log("Hello Rigo from the console!");
  createRandomCard();
  timerButtonLabel.innerHTML = "Start Timer";
};

timerButton.addEventListener("change", runTimer);
randomCardButton.addEventListener("click", createRandomCard);
setCardButton.addEventListener("click", setCardFromInput);

function setCardFromInput() {
  let inputNumber = document.getElementsByName("inputNumbers")[0].value;
  let inputIcon = document.getElementsByName("inputIcons")[0].value;

  if ((inputIcon != "" && inputNumber != "") || inputNumber == "Joker") {
    let cardNumber = inputNumber;
    if (cardNumber == "Joker") {
      createImage("50px", "50px", "");
      resetCard();
      createImage("300px", "200px", "./joker.jpg");
      image.style.margin = "71px";
    } else {
      createImage("50px", "50px", "./4geeks.ico");
      image.style.margin = "100px";

      let cardSymbol = inputIcon;
      if (cardSymbol == "♦" || cardSymbol == "♥") setCardColor("red");
      else setCardColor("black");

      setCard(cardSymbol, cardNumber);
    }
  }

  document.getElementsByName("inputNumbers")[0].value = "";
  document.getElementsByName("inputIcons")[0].value = "";
}

function runTimer() {
  if (!this.checked) {
    initializeTime();
    let timer = new Timer(function() {
      if (timeleft == 0) setNewCardAndResetTimer();
      else if (timeleft > 0) decreaseTime();
      else timer.stop();
    }, 1000);
  } else ResetTimer();
}

function createRandomCard() {
  let cardNumber = getRandom(cardNumbers);
  if (cardNumber == "Joker") {
    createImage("50px", "50px", "");
    resetCard();
    createImage("300px", "200px", "./joker.jpg");
    image.style.margin = "71px";
  } else {
    createImage("50px", "50px", "./4geeks.ico");
    image.style.margin = "100px";

    let cardSymbol = getRandom(cardSymbols);
    if (cardSymbol == "♦" || cardSymbol == "♥") setCardColor("red");
    else setCardColor("black");

    setCard(cardSymbol, cardNumber);
  }
}

function setCard(cardSymbol, cardNumber) {
  cardSymbolLabelTop.innerHTML = cardSymbol;
  cardSymbolLabelBottom.innerHTML = cardSymbol;
  cardNumberLabelTop.innerHTML = cardNumber;
  cardNumberLabelBottom.innerHTML = cardNumber;
}

function resetCard() {
  image.style.height = "0px";
  image.style.width = "0px";
  image.src = "./";
  cardNumberLabelTop.innerHTML = "";
  cardNumberLabelBottom.innerHTML = "";
  cardSymbolLabelTop.innerHTML = "";
  cardSymbolLabelBottom.innerHTML = "";
}

function createImage(height, width, src) {
  image.src = src;
  image.style.height = height;
  image.style.width = width;
}

function setCardColor(color) {
  cardSymbolLabelTop.style.color = color;
  cardSymbolLabelBottom.style.color = color;
  cardNumberLabelTop.style.color = color;
  cardNumberLabelBottom.style.color = color;
}

function getRandomInt(arraySize) {
  return Math.floor(Math.random() * arraySize);
}

function getRandom(array) {
  return array[getRandomInt(array.length)];
}

function setCountdownTimer(timeleft) {
  timerLabel.innerHTML = timeleft + " seconds remaining";
}

function ResetTimer() {
  timeleft = -1;
  timerButtonLabel.innerHTML = "Start Timer";
  timerLabel.innerHTML = "Timer stopped";
}

function initializeTime() {
  timeleft = timeCounter;
  timerButtonLabel.innerHTML = "Stop Timer";
}

function decreaseTime() {
  setCountdownTimer(timeleft);
  timeleft -= 1;
}

function setNewCardAndResetTimer() {
  setCountdownTimer(timeleft);
  createRandomCard();
  timeleft = timeCounter;
}

function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function() {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };

  this.start = function() {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  };

  this.reset = function(newT = t) {
    t = newT;
    return this.stop().start();
  };
}

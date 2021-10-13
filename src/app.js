/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let timerButtonLabel = document.getElementById("label");
let timerLabel = document.getElementById("countdown");
let timerButton = document.getElementById("b2");
let randomCardButton = document.getElementById("b1");
let cardNumberLabel = document.getElementById("cardNumber");
let cardSymbolLabel = document.getElementById("cardIcon");
let cardNumbers = [
  "1",
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
  "K"
];
let cardSymbols = ["♦", "♥", "♠", "♣"];
let timeCounter = 10;
let timeleft = timeCounter;

window.onload = function() {
  console.log("Hello Rigo from the console!");
  cardSymbolLabel.innerHTML = getRandom(cardSymbols);
  cardNumberLabel.innerHTML = getRandom(cardNumbers);
  timerButtonLabel.innerHTML = "Start Timer";
};

timerButton.addEventListener("change", runTimer);
randomCardButton.addEventListener("click", createRandomCard);

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

function getRandomInt(arraySize) {
  return Math.floor(Math.random() * arraySize);
}

function getRandom(array) {
  return array[getRandomInt(array.length)];
}

function createRandomCard() {
  cardSymbolLabel.innerHTML = getRandom(cardSymbols);
  cardNumberLabel.innerHTML = getRandom(cardNumbers);
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
  //timeleft = timeCounter;
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

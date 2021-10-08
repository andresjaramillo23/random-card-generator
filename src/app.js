/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.getElementById("cardIcon").innerHTML = "♣";
  document.getElementById("cardNumber").innerHTML = "1";
};

function getRandomCard() {
  return Math.floor(Math.random() * 4 + 1);
}

function getRandomNumber() {
  return String(Math.floor(Math.random() * 13));
}

const btn = document.getElementById("b1");

btn.onclick = function() {
  switch (getRandomCard()) {
    case 1:
      document.getElementById("cardIcon").innerHTML = "♦";
      break;
    case 2:
      document.getElementById("cardIcon").innerHTML = "♥";
      break;
    case 3:
      document.getElementById("cardIcon").innerHTML = "♠";
      break;
    case 4:
      document.getElementById("cardIcon").innerHTML = "♣";
      break;
  }

  document.getElementById("cardNumber").innerHTML = getRandomNumber();
};

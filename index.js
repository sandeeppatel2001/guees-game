"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let displaymsg = function (massege) {
  document.querySelector(".massege").textContent = massege;
};
document.querySelector(".btn").addEventListener("click", function () {
  const input = Number(document.querySelector(".inp").value);
  let j = document.querySelector(".b").textContent;
  if (!input) {
    document.querySelector(".massege").textContent =
      "ββno number between 1-20";
    document.querySelector(".b").textContent = "x";
    document.querySelector(".b").style.backgroundColor = "#ff0000";
  } else if (input === secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".massege").textContent =
      "πππππ currect number ββ!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".b").textContent =
      "ππππ" + secretNumber + "ππππ";
    document.querySelector(".b").style.backgroundColor = "#60b347";
    if ((input === secretNumber) & (j === "πππ" + secretNumber + "ππ")) {
      score++;
      document.querySelector(".score").textContent = score;
    }
  } else if (input > secretNumber) {
    document.querySelector(".massege").textContent = "βββπ₯΅π₯΅To high number";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".b").textContent = "x";
    document.querySelector(".b").style.backgroundColor = "#ff0000";
  } else if (input < secretNumber) {
    document.querySelector(".massege").textContent = "βββπ€¬π€¬To low number";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".b").textContent = "x";
    document.querySelector(".b").style.backgroundColor = "#ff0000";
  }
  if (input > 20) {
    document.querySelector(".massege").textContent =
      "ββπ₯΅π₯΅π₯΅NUMBER IS NAT BETWEEN 1-20";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".b").textContent = "x";
    document.querySelector(".b").style.backgroundColor = "#ff0000";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  alert("πππππππWELCOME TO THE NEW GAME");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymsg(" start guessing---");
  document.querySelector(".score").textContent = score;
  document.querySelector(".inp").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".b").textContent = "?";
  document.querySelector.textContent = "?";
  document.querySelector(".b").style.backgroundColor = "#222";
});

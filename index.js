// Select the home score element
const homeScoreElem = document.querySelector("#home + .score");

// Define functions to increment the score
function homeBtn1() {
  homeScoreElem.textContent = parseInt(homeScoreElem.textContent) + 1;
}
function homeBtn2() {
  homeScoreElem.textContent = parseInt(homeScoreElem.textContent) + 2;
}
function homeBtn3() {
  homeScoreElem.textContent = parseInt(homeScoreElem.textContent) + 3;
}

// Assign the functions to the onclick attribute of each button
document.querySelector("#home-btn1").onclick = homeBtn1;
document.querySelector("#home-btn2").onclick = homeBtn2;
document.querySelector("#home-btn3").onclick = homeBtn3;

// Select the guest score element
const guestScoreElem = document.querySelector("#guest + .score");

// Define functions to increment the score
function guestBtn1() {
  guestScoreElem.textContent = parseInt(guestScoreElem.textContent) + 1;
}
function guestBtn2() {
  guestScoreElem.textContent = parseInt(guestScoreElem.textContent) + 2;
}
function guestBtn3() {
  guestScoreElem.textContent = parseInt(guestScoreElem.textContent) + 3;
}

// Assign the functions to the onclick attribute of each button
document.querySelector("#guest-btn1").onclick = guestBtn1;
document.querySelector("#guest-btn2").onclick = guestBtn2;
document.querySelector("#guest-btn3").onclick = guestBtn3;
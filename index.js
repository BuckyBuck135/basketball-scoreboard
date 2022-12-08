
let countHome = 0;
let countGuest = 0;

const scoreHomeEl = document.getElementById("score-home-el");
const scoreGuestEl = document.getElementById("score-guest-el"); 
const splashDiv = document.querySelector(".splash");
const containerDiv = document.querySelector(".container")
const form = document.querySelector("form")

const nameInputHome = document.getElementById("entername-home");
const nameInputGuest = document.getElementById("entername-guest");

const nameDisplayHome = document.getElementById("name-display-home")
const nameDisplayGuest = document.getElementById("name-display-guest")

//Hides the main container by default//
containerDiv.style.visibility = 'hidden';

//Submit names on click //
form.addEventListener('submit', function(e) {
        e.preventDefault();
        splashDiv.style.display = 'none';
        containerDiv.style.visibility = 'visible';
        nameDisplayHome.textContent = nameInputHome.value;
        nameDisplayGuest.textContent = nameInputGuest.value;
        })

// Shows a different cheer message according to score //
const cheeringEl = document.getElementById("cheering")
function showCheerMessage() {
    if (countHome > countGuest) {
        cheeringEl.textContent = "Go " + nameInputHome.value +"!";
    } else if (countGuest > countHome) {
        cheeringEl.textContent = "Go " + nameInputGuest.value +"!";
    } else {
        cheeringEl.textContent = "Go Go Go!";
    }
}
showCheerMessage()

// Increment functions below//

function incrementHome(points) {
    countHome += points;
    render()
    showCheerMessage()
    scorePulseEffect()
}

function incrementGuest(points) {
    countGuest += points;
    render()
    showCheerMessage()
    scorePulseEffect()
}

function render() {
    scoreHomeEl.textContent=countHome;
    scoreGuestEl.textContent=countGuest;   
}
function reset() {
    countHome = 0;
    countGuest = 0;
    render()
    scorePulseEffect()
    showCheerMessage()
}

function reload() {
    location.reload();
}

// Conditional pulse CSS effct //
function scorePulseEffect() {
    if (countGuest > countHome) {
        scoreHomeEl.classList.remove("leader-pulse");
        scoreGuestEl.classList.add("leader-pulse");
        } else if (countHome > countGuest) {
        scoreHomeEl.classList.add("leader-pulse");
        scoreGuestEl.classList.remove("leader-pulse");
    } else {
        scoreHomeEl.classList.remove("leader-pulse");
        scoreGuestEl.classList.remove("leader-pulse");
    }
}



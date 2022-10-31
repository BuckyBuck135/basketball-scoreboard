let scoreHomeEl = document.getElementById("score-home-el");
let scoreGuestEl = document.getElementById("score-guest-el");
let countHome = 0;
let countGuest = 0;

const splashDiv = document.querySelector(".splash");
const containerDiv = document.querySelector(".container")
const submitBtnEl = document.getElementById("submit-btn")

const nameInputHome = document.getElementById("entername-home");
const nameInputGuest = document.getElementById("entername-guest");

const nameDisplayHome = document.getElementById("name-display-home")
const nameDisplayGuest = document.getElementById("name-display-guest")

//hides the main container by default//
containerDiv.style.visibility = 'hidden';

// --- Submit names on click function below --- //
//HTML onclick version//
//Hides the splash, reveals the main container, computes team names//
// function submitNames() {
// splashDiv.style.display = 'none';
// containerDiv.style.visibility = 'visible';
// nameDisplayHome.textContent = nameInputHome.value;
// nameDisplayGuest.textContent = nameInputGuest.value;
// }

//JS eventListener version//
//Hides the splash, reveals the main container, computes team names//
submitBtnEl.addEventListener("click", function() {
    splashDiv.style.display = 'none';
    containerDiv.style.visibility = 'visible';
    nameDisplayHome.textContent = nameInputHome.value;
    nameDisplayGuest.textContent = nameInputGuest.value;
    })
// --- End of function --- //

// Shows a different cheer message accordiing to score //
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
    scoreHomeEl.textContent=countHome;
    showCheerMessage()
    scorePulseEffect()
}

function incrementGuest(points) {
    countGuest += points;
    scoreGuestEl.textContent=countGuest;
    showCheerMessage()
    scorePulseEffect()
}
//end of increment functions//

function reset() {
    countHome = 0;
    countGuest = 0;
    scoreGuestEl.textContent=countGuest;
    scoreHomeEl.textContent=countHome;
    scorePulseEffect()
    showCheerMessage()


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



var mainNav = document.querySelector("#main-nav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button");
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");
var canYouSeeMainNav = false;

function showNav() {
    if (!canYouSeeMainNav) {
        console.log("show menu");
        mainNav.classList.add("showMainNav");
        signInUpButtons.classList.add("showSignIn");
        canYouSeeMainNav = true;
        burgerBars.classList.add("hide-burger-bars");
        burgerX.classList.remove("hide-burger-x");
    } else {
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        signInUpButtons.classList.remove("showSignIn");
        burgerBars.classList.remove("hide-burger-bars");
        burgerX.classList.add("hide-burger-x");
        canYouSeeMainNav = false;
    }
}

burgerBtn.addEventListener("click", showNav);

var signInBtn = document.querySelector("#sign-in-btn");
var signInContainer = document.querySelector("#sign-in-container");
var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");

function showSignInModal() {
    signInContainer.classList.add("show-signIn-container");
    mainNav.classList.remove("showMainNav");
    signInUpButtons.classList.remove("showSignIn");
}

function hideSignInModal() {
    signInContainer.classList.remove("show-signIn-container");
}

signInBtn.addEventListener("click", showSignInModal);
closeSignUpModalBtn.addEventListener("click", hideSignInModal);

document.addEventListener("click", function (event) {
    // Check if the click is outside signInContainer
    if (!signInContainer.contains(event.target)) {
        hideSignInModal();
    }
});

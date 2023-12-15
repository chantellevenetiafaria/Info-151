/*------------------------------
      Navigation
-------------------------------*/


var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button");

var signInUpButtons = document.querySelector("#sign-in-up-buttons");

var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");

var canYouSeeMainNav = false;

//console.log(burgerBtn);

console.log("working");
//var sectionTags = document.querySelectorAll("section");



function showNav(){
    //console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        //this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        signInUpButtons.classList.add("showSignIn");

        canYouSeeMainNav = true;

        burgerBars.classList.add("hide-burger-bars");

        burgerX.classList.remove("hide-burger-x");
    }else{
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        //this will remove the class of showMainNav to the id mainNav
        signInUpButtons.classList.remove("showSignIn");
        burgerBars.classList.remove("hide-burger-bars");

        burgerX.classList.add("hide-burger-x");
        canYouSeeMainNav = false;
    }
    

}

//add a event listener
burgerBtn.addEventListener("click", showNav);


//will call a function
//showNav();

/*------------------------------
      Sign In
-------------------------------*/

var signInBtn = document.querySelector("#sign-in-btn");

var signInContainer = document.querySelector("#sign-in-container");

var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");


function showSignInModal(){
    //console.log("show modal now");

    signInContainer.classList.add("show-signIn-container");
    mainNav.classList.remove("showMainNav");
    signInUpButtons.classList.remove("showSignIn");
}

function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container");
}

signInBtn.addEventListener("click",showSignInModal);
closeSignUpModalBtn.addEventListener("click",hideSignInModal);

/*------------------------------
      Sign Up
-------------------------------*/

var signUpBtn = document.querySelector("#sign-up-btn");

var signUpContainer = document.querySelector("#sign-up-container");

var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");


function showSignUpModal(){
    //console.log("show modal now");

    signUpContainer.classList.add("show-signUp-container");
    mainNav.classList.remove("showMainNav");
    signInUpButtons.classList.remove("showSignUp");
}

function hideSignUpModal(){
    signUpContainer.classList.remove("show-signUp-container");
}

signUpBtn.addEventListener("click",showSignUpModal);
closeSignUpModalBtn.addEventListener("click",hideSignUpModal);
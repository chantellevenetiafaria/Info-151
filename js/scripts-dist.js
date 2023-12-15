var mainNav = document.querySelector("#main-nav");
 var signInUpButtons = document.querySelector("#sign-in-up-buttons");
 var burgerBtn = document.querySelector("#burger-container button");
 var signInBtn = document.querySelector("#sign-in-btn");
 var signInContainer = document.querySelector("#sign-in-container");
 var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");

 var burgerBars = document.querySelector("#burger-bars");
 var burgerX = document.querySelector("#burger-x");
 
 
 // this can only be true or false known as a boolean
 var canYouSeeMainNav = false;
 
 function showNav(){
     // console.log("button clicked");
     if(canYouSeeMainNav === false){
         console.log("show menu");
         // this will add the class of showMainNav to the id mainNav
         mainNav.classList.add("showMainNav");
 
         signInUpButtons.classList.add("showSignIn");
         canYouSeeMainNav = true;
 
         // hide burger bars
         burgerBars.classList.add("hide-burger-bars");
 
         // show burger x
         burgerX.classList.remove("hide-burger-x");
 
     }else{
         console.log("hide menu");
         // this will remove the class of showMainNav to the id mainNav
         mainNav.classList.remove("showMainNav");
 
         signInUpButtons.classList.remove("showSignIn");
 
         // show burger bars
         burgerBars.classList.remove("hide-burger-bars");
 
         // hide burger x
         burgerX.classList.add("hide-burger-x");
 
         canYouSeeMainNav = false;
     }
     
 }
 
 // add a event listener to the button
 burgerBtn.addEventListener("click", showNav);
 
 
 
 /* --------------------
     Sign In 
  -------------------- */  
 
 
  function showSignInModal() {
     // console.log("show modal now");
     signInContainer.classList.add("show-signIn-container");
     // hide the navigation on close
     mainNav.classList.remove("showMainNav");
     // hide the signup/in buttons
     signInUpButtons.classList.remove("showSignIn");
  }
 
  function hideSignInModal(){
     signInContainer.classList.remove("show-signIn-container");
     
  }
 
  signInBtn.addEventListener("click", showSignInModal);
  closeSignUpModalBtn.addEventListener("click", hideSignInModal);
 
  signInContainer.addEventListener("click", hideSignInModal);


var mainNav = document.querySelector("#main-nav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button");



/* --------------------
    Sign Up Modal
-------------------- */
var signUpModal = document.getElementById("signUpModal");
var signUpBtn = document.querySelector(".white-btn");
var closeSignUpModalBtn = document.querySelector("#close-sign-Up-Modal-btn");

function showSignUpModal() {
    signUpModal.style.display = "block";
}

function hideSignUpModal() {
    signUpModal.style.display = "none";
}

// Update the event listener for the signup button
signUpBtn.addEventListener("click", showSignUpModal);
closeSignUpModalBtn.addEventListener("click", hideSignUpModal);

// Add an event listener to close the signup modal when clicking outside the form
document.addEventListener("click", function (event) {
    if (event.target === signUpModal) {
        hideSignUpModal();
    }
});

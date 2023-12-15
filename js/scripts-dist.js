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
  signUpBtn.addEventListener("click", showSignUpModal);

var mainNav = document.querySelector("#main-nav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button");


/* --------------------
    Sign Up Modal
-------------------- */
var signUpContainer = document.querySelector("#sign-up-container");
var signUpButton = document.querySelector("#signUpButton");
var cancelSignUpButton = document.querySelector("#cancelSignUpButton");

function showSignUpModal() {
    signUpContainer.classList.add("show-signUp-container");
}

function hideSignUpModal() {
    signUpContainer.classList.remove("show-signUp-container");
}

signUpButton.addEventListener("click", function () {
    // Add your signup logic here
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var zipCode = document.getElementById("zip-code").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform signup validation and submit data as needed

    // For demo purposes, just hiding the modal
    hideSignUpModal();
});

cancelSignUpButton.addEventListener("click", hideSignUpModal);

signUpContainer.addEventListener("click", function (event) {
    if (event.target === signUpContainer) {
        hideSignUpModal();
    }
});
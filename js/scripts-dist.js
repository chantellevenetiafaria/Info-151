var mainNav = document.querySelector("#main-nav")
  , signInContainer = document.querySelector("#signIn-container")
  , burgerBtn = document.querySelector("#burger-container button")
  , canYouSeeMainNav = !1;
function showNav() {
    !1 === canYouSeeMainNav ? (console.log("show menu"),
    mainNav.classList.add("showMainNav"),
    signInContainer.classList.add("showSignIn"),
    canYouSeeMainNav = !0) : (console.log("hide menu"),
    mainNav.classList.remove("showMainNav"),
    signInContainer.classList.remove("showSignIn"),
    canYouSeeMainNav = !1)
}
burgerBtn.addEventListener("click", showNav);

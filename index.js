"use strict";

const hamburgerBtn = document.querySelector(".hamburger-icon");
const hamburgerActive = document.querySelector(".hamburger-active");

hamburgerBtn.addEventListener("click", function () {
    if(hamburgerActive.style.display == "block") {
        hamburgerActive.style.display = "none";
    } else {
        hamburgerActive.style.display = "block";
    }
});


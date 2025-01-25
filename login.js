"use strict";

//////////////////////////////////
const forgetPass = document.getElementById("forget-pass");
// console.log(forgetPass);
if (forgetPass) {
  forgetPass.addEventListener("click", () => {
    window.location.href = "forget-password.html";
  });
}
//////////////////////////////////

const logform = document.querySelector(".log-in-form");

logform.addEventListener("submit", function (e) {
  // e.preventDefault();
  const email = document.getElementById("log-email").value;
  const password = document.getElementById("log-password").value;
  const regEmail = /\w+@\w+\.\w+/g;
  if (!regEmail.test(email) || password.length < 6) {
    console.log("er");
    e.preventDefault();
  } else {
    window.location.href = "./home.html";
  }
});

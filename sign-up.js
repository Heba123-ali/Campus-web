"use strict";

//////////////////////////////////
// const forgetPass = document.getElementById("forget-pass");
// // console.log(forgetPass);
// if (forgetPass) {
//   forgetPass.addEventListener("click", () => {
//     window.location.href = "forget-password.html";
//   });
// }
//////////
let signUpForm = document.querySelector(".sign-up-form");
let userName = document.querySelector("#user-name");
let userEmail = document.querySelector("#email");
let userPhone = document.querySelector("#phone");
let userPass = document.querySelector("#password");
let userPassConfirm = document.querySelector("#password-confirm");
let usergender = document.querySelector("#gender");
let usercountry = document.querySelector("#country");
let userspecialty = document.querySelector("#specialty");
let userexperience = document.querySelector("#experience");
let aboutUser = document.querySelector("#about");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
  if (userName.value === "" || userName.value.length <= 3) {
    alert("يرجى كتابه الاسم بشكل صحيح");
    return false;
  }

  const regEmail = /\w+@\w+\.\w+/g;
  if (!regEmail.test(userEmail.value)) {
    alert("يرجى كتابه البريد الاليكترونى بشكل صحيح");
    return false;
  }

  const regPhone = /(010|011|012|015)\d{8}/;
  if (!regPhone.test(userPhone.value)) {
    alert("يرجى كتابه رقم الهاتف بشكل صحيح");
    return false;
  }
  const regPass = /\w{6,}/gi;
  if (!regPass.test(userPass.value)) {
    alert(
      "يرجى كتابه كلمه المرور بحيث تحتوى على احرف وارقام ولا تقل عن 6 باللغه الانجليزيه"
    );
    return false;
  }
  if (userPassConfirm.value !== userPass.value) {
    alert("كلمه المرور غير متطابقه");
    return false;
  }
  document.querySelector(".sign-up2").classList.remove("heddin-form");
  document.querySelector(".sign-up1").classList.add("heddin-form");
});
signUpForm.addEventListener("submit", (e) => {
  if (
    !userName.value ||
    !userEmail.value ||
    !userPass.value ||
    !userPhone.value ||
    !userPassConfirm.value
  ) {
    e.preventDefault();
  }
  if (
    usercountry.value.length < 3 ||
    !userexperience.value ||
    !usergender.value ||
    !userspecialty.value ||
    !aboutUser.value
  ) {
    alert("يرجى اكمال و كتابه البيانات بشكل صحيح");
    e.preventDefault();
  }
});

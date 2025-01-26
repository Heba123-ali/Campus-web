const bar = document.getElementById("bar");
const mobileNav = document.getElementById("mobile-nav");

bar.addEventListener("click", () => {    
    mobileNav.classList.toggle("active");
})


    const circle = document.querySelector("circle");

    const maxRating = 5; // أقصى تقييم
    const circleCircumference = 2 * Math.PI * 110; // محيط الدائرة (r = 110)

    // تحديث التقييم
    function updateRating(rating) {
      if (rating < 0 || rating > maxRating) {
        console.error("التقييم يجب أن يكون بين 0 و 5");
        return;
      }

      // حساب الامتلاء بناءً على التقييم
      const offset = circleCircumference - (rating / maxRating) * circleCircumference;

      // تحديث مظهر الدائرة
      circle.style.strokeDashoffset = offset;
    }
    setTimeout(() => updateRating(3.5), 1000); // تغيير التقييم بعد ثانية

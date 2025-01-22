document
  .querySelector(".sign-up-btn")
  .addEventListener("click", () => (window.location.href = "sign-up.html"));

document
  .querySelector(".logo")
  .addEventListener("click", () => (window.location.href = "landing.html"));
////////////////////////////////
const fields = document.querySelector(`.fields-images`);
const fieldsImages = document.querySelectorAll(`.fields-images .field`);
const prevBtn = document.querySelector(".field-right");
const nextBtn = document.querySelector(".field-left");
// const fieldPara = document.querySelectorAll(`.overlay .text p`);

let currentIndex = 0;

function showSlide(index) {
  if (index >= fieldsImages.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = fieldsImages.length - 1;
  } else {
    currentIndex = index;
  }
  const imageWidth = fieldsImages[currentIndex].clientWidth;
  fields.scrollTo({
    left: -currentIndex * imageWidth,
    behavior: "smooth",
  });
  // fieldsImages.forEach((e) => {
  //   e.style.width = `237px`;
  //   fieldsImages[currentIndex].style.width = `426px`;
  // });
}
// fieldsImages.forEach((e) => {
//   e.addEventListener("mouseover", () => {
//     fieldsImages.forEach((ele) => (ele.style.width = `237px`));
//     e.style.width = `426px`;
//     console.log(e);
//     document.querySelector(`.field-img`).style.width = "426px";

// fieldPara.forEach((ele) => (ele.style.display = "none"));
// document.querySelector(`.${e} .text p`).style.display = "block";
//   });
// });
prevBtn.addEventListener("click", () => {
  showSlide((currentIndex -= 1));
});
nextBtn.addEventListener("click", () => {
  showSlide((currentIndex += 1));
});
///////////////////////////stories
const stories = document.querySelector(`.stories .story .cards `);
const story = document.querySelectorAll(`.stories .story .cards .card`);
const prevStory = document.querySelector(".prev-story");
const nextStory = document.querySelector(".next-story");
let currentStory = 0;

function showStory(index) {
  if (index >= story.length) {
    currentStory = 0;
  } else if (index < 0) {
    currentStory = story.length - 1;
  } else {
    currentStory = index;
  }

  const storyWidth = story[currentStory].clientWidth;
  stories.scrollTo({
    left: -currentStory * storyWidth,
    behavior: "smooth",
  });
  story.forEach((e) => {
    e.style.opacity = "0.6";
    e.style.height = " 324px";
  });
  story[currentStory].style.opacity = "1";
  story[currentStory].style.height = " 296px";
}
prevStory.addEventListener("click", () => {
  showStory((currentStory -= 1));
});
nextStory.addEventListener("click", () => {
  showStory((currentStory += 1));
});
showStory(currentStory);
///////////////////////////stories
////////////////
const Frame = ["Frame1", "Frame2", "Frame3"];
const FrameImages = document.querySelectorAll(".about .images img");
let currentframe = 0;
setInterval(() => {
  FrameImages.forEach((e) => e.classList.add("hidden-images"));
  currentframe = (currentframe + 1) % Frame.length;
  document
    .querySelectorAll(`.${Frame[currentframe]}`)
    .forEach((ele) => ele.classList.remove("hidden-images"));
}, 2000);
///////////////////

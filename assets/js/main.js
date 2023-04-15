// show_list_color
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const showChangeColor = document.querySelector(".change-color-icon");
let show = false;
const showChange = () => {
  if (!show) {
    $(".background-change").style.animation = "fadeInLeft 0.5s linear forwards";
    show = true;
    console.log(show);
  } else {
    $(".background-change").style.animation =
      "fadeOutLeft 0.5s linear forwards";
    show = false;
  }
};
showChangeColor.addEventListener("click", showChange);
//

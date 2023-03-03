const toggle = document.getElementById("hello");
const body = document.querySelector("body");
const hello = document.getElementById("heading1");
const hello2 = document.getElementById("heading2");
const subHeading = document.querySelector(".sub-heading");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-stars-fill");
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = "#191919";
    body.style.transition = "2s";
    toggle.style.color = "#ffffff";
    hello.style.color = "white";
    hello2.style.color = "white";
    subHeading.style.color = "white";
  } else {
    body.style.background = "#fff";
    body.style.transition = "2s";
    toggle.style.color = "#191919";
    hello.style.color = "#191919";
    hello2.style.color = "#191919";
    subHeading.style.color = "#191919";
  }
});
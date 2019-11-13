//Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(function(pre) {
    preloader.classList.add("preloader-finish");
  }, 4000);
});

//Image portfolio
const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.2;

img[0].style.opacity = opacity;

imgs.addEventListener("click", imgClick);

function imgClick(e) {
  img.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  e.target.style.opacity = opacity;
}

const searchEl = document.querySelector(".search");
console.log(searchEl);
const searchInputEl = searchEl.querySelector("input");
console.log(searchInputEl);

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

let badge = document.querySelector("header .badges");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (this.window.scrollY > 1000) {
    // badge.style.display = "none";
    gsap.to(badge, 0.6, {
      opacity: 0,
      display: "none",
    });
  } else {
    // badge.style.display = "block";
    gsap.to(badge, 0.6, {
      opacity: 1,
      display: "block",
    });
  }
});

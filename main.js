// 검색기능 구동
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

// 배찌 부분 구동
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


// 메인 배너 순차 애니메이션
const fadeimg = document.querySelectorAll('.visual .fade-in');

fadeimg.forEach(function(fadeimg, index){
  gsap.to(fadeimg, 1,{
    delay: (index + 1) * .7,
    opacity: 1,
  })
})
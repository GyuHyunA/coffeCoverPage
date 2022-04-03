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
  if (this.window.scrollY > 500) {
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
const fadeimg = document.querySelectorAll(".visual .fade-in");

fadeimg.forEach(function (fadeimg, index) {
  gsap.to(fadeimg, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// promotion 토글
const promotion = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".inner__right");
promotionToggleBtn.addEventListener("click", function () {
  if (promotion.classList.contains("hide")) {
    promotion.classList.remove("hide");
  } else {
    promotion.classList.add("hide");
  }
});

//swiper
new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  simulateTouch: false, // 책과 다르게 추가
  pagination: {
    el: ".promotion .swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

gsap.to(".floating1", 1.5, {
  delay: 1,
  y: 15,
  repeat: 1,
  yoyo: true,
  ease: Power1.easeInOut,
});
gsap.to(".floating2", 2, {
  delay: 0.5,
  y: 15,
  repeat: 1,
  yoyo: true,
  ease: Power1.easeInOut,
});
gsap.to(".floating3", 2.5, {
  delay: 1.5,
  y: 15,
  repeat: 1,
  yoyo: true,
  ease: Power1.easeInOut,
});

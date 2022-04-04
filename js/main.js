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
const badge = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (this.window.scrollY > 500) {
    // badge.style.display = "none";
    gsap.to(badge, 0.6, {
      opacity: 0,
      display: "none",
    });
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0,
    });
  } else {
    // badge.style.display = "block";
    gsap.to(badge, 0.6, {
      opacity: 1,
      display: "block",
    });
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100,
    });
  }
});
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.6, {
    scrollTo: 0,
  });
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

// scroll magic
const spyscr = document.querySelectorAll("section.scroll-spy");
console.log(spyscr);
spyscr.forEach(function (spyv) {
  new ScrollMagic.Scene({ triggerElement: spyv, triggerHook: 0.8 }).setClassToggle(spyv, "show").addTo(new ScrollMagic.Controller());
});

// awards
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next",
  },
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

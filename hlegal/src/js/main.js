//css
import "swiper/css";
import "swiper/css/pagination";
import "../scss/style.scss";
// switchThemeColor()

//js
(function () {
  const isOpen = document.querySelector(".menu__burger");
  const isClose = document.querySelector(".menu__btnclose");
  const navigation = document.querySelector(".menu__list");

  if (isOpen && navigation) {
    isOpen.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  if (isClose && navigation) {
    isClose.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (
      navigation &&
      !navigation.contains(event.target) &&
      isOpen &&
      !isOpen.contains(event.target)
    ) {
      navigation.classList.remove("active");
    }
  });
})();


//tabs 
window.addEventListener("DOMContentLoaded", () => {
  const tabsList = document.querySelector(".tabs__list");
  const tabs = document.querySelectorAll(".tabs__link");
  const contents = document.querySelectorAll(".tabs__content");

  // старт: 1-я вкладка активна
  contents.forEach((c, i) => c.classList.toggle("is-active", i === 0));
  tabs.forEach((t, i) => t.classList.toggle("tabs__link--active", i === 0));

  tabsList.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(".tabs__link");
    if (!clickedTab) return;

    const index = Array.from(tabs).indexOf(clickedTab);
    if (index === -1) return;

    contents.forEach((c) => c.classList.remove("is-active"));
    tabs.forEach((t) => t.classList.remove("tabs__link--active"));

    contents[index].classList.add("is-active");
    tabs[index].classList.add("tabs__link--active");
  });
});



//swiper gallery
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

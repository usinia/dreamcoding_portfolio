"use strict";

// 프로젝트 필터링 관련 로직 처리
const categoriesEl = document.querySelector(".categories");
const projectsEl = document.querySelector(".projects");

categoriesEl.addEventListener("click", (e) => {
  const { category } = e.target.dataset;
  if (!category) return;

  /*
  categoriesEl.querySelectorAll("button.category").forEach((v) => {
    v.dataset.category === category
      ? v.classList.add("category--selected")
      : v.classList.remove("category--selected");
  });
  */
  //  Active 메뉴를 재설정
  const activeBtn = document.querySelector(".category--selected");
  activeBtn.classList.remove("category--selected");
  e.target.classList.add("category--selected");

  projectsEl.classList.add("animation-out");
  projectsEl.querySelectorAll("li.project").forEach((v) => {
    /*
    if (category === "all") {
      v.classList.remove("invisible");
    } else {
      if (v.dataset.category !== category) {
        v.classList.add("invisible");
      } else {
        v.classList.remove("invisible");
      }
    }
    */
    //  프로젝트 필터링
    if (category === "all" || v.dataset.category === category) {
      // v.classList.remove("invisible");
      v.style.display = "block";
    } else {
      // v.classList.add("invisible");
      v.style.display = "none";
    }
  });
  setTimeout(() => {
    projectsEl.classList.remove("animation-out");
  }, 250);
});

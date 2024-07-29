"use strict";

// 프로젝트 필터링 관련 로직 처리
const categoriesEl = document.querySelector(".categories");
const projectsEl = document.querySelector(".projects");

categoriesEl.addEventListener("click", (e) => {
  const { category } = e.target.dataset;
  if (!category) return;

  handleActiveSelection(e.target);
  filterProjects(category);
});

//  Active 메뉴를 재설정
function handleActiveSelection(target) {
  const activeBtn = document.querySelector(".category--selected");
  activeBtn.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projectsEl.querySelectorAll("li.project").forEach((v) => {
    //  프로젝트 필터링
    if (filter === "all" || v.dataset.category === filter) {
      v.style.display = "block";
    } else {
      v.style.display = "none";
    }
  });

  projectsEl.classList.add("animation-out");
  setTimeout(() => {
    projectsEl.classList.remove("animation-out");
  }, 250);
}

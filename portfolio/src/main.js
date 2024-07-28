// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const headerEl = document.querySelector(".header");
const headerHeight = headerEl.getBoundingClientRect().height;
document.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (headerHeight < scrollY) {
    headerEl.classList.add("primary");
  } else {
    headerEl.classList.remove("primary");
  }
});

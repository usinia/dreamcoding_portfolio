// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const handleHeaderStyle = () => {
  const headerEl = document.querySelector(".header");
  // const headerHeight = headerEl.getBoundingClientRect().height;
  const headerHeight = headerEl.offsetHeight;

  document.addEventListener("scroll", function () {
    if (headerHeight < window.scrollY) {
      headerEl.classList.add("primary");
    } else {
      headerEl.classList.remove("primary");
    }
  });
};

// Home에 페이지 아래로 스크롤시 투명도 적용
const handleHomeStyle = () => {
  const homeEl = document.querySelector(".home__container");

  // setEventListener 는 마지막 이벤트가 덮어쓰여지지만, addEventListener 이므로 기능별로 add 해주는게 좋다.
  document.addEventListener("scroll", function () {
    // homeEl.style.opacity = 1 - Math.floor((window.scrollY / homeEl.offsetHeight) * 100) / 100;
    homeEl.style.opacity = 1 - window.scrollY / homeEl.offsetHeight;
  });
};

handleHeaderStyle();
handleHomeStyle();

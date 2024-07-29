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

// Home 이 반 정도 가려지면 Arrrow Up 버튼 노툴
const handleArrowUp = () => {
  const arrowUpEl = document.querySelector(".arrow-up");
  const homeEl = document.querySelector(".home__container");

  document.addEventListener("scroll", function () {
    if (window.scrollY > homeEl.offsetHeight / 2) {
      // arrowUpEl.style.opacity = 1;
      arrowUpEl.classList.add("visible");
    } else {
      // arrowUpEl.style.opacity = 0;
      arrowUpEl.classList.remove("visible");
    }
  });
};

// NavBar 토글 버튼 클릭 처리
const handmeNavbarMenuToggle = () => {
  const navbarMenu = document.querySelector(".header__menu");
  const navbarToggle = document.querySelector(".header__toggle");
  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("open"); // toggle: 있으면 추가, 없으면 삭제
  });

  // menu 안에 요소를 클릭하면 닫히게
  navbarMenu.addEventListener("click", () => {
    navbarMenu.classList.remove("open");
  });
};

handleHeaderStyle();
handleHomeStyle();
handleArrowUp();
handmeNavbarMenuToggle();

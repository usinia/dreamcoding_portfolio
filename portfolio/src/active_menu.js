// sectionIds 배열을 만들어서 section, nav 를 handle
const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];
// 노출 중인 section
const visibleSections = sectionIds.map(() => false);
let activeNavEl = document.querySelector(".active");

const callback = (entries, observer) => {
  let isLastSectionActive = false;
  entries.forEach((entry) => {
    const index = sectionIds.findIndex((v) => v === `#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting; // 1. 노출 여부를 저장한 다음

    // lastSection
    isLastSectionActive =
      index === sectionIds.length - 1 && // 마지막 요소이고
      entry.isIntersecting && // 화면에 보여지고 있고
      entry.intersectionRatio >= 0.95; // 요소가 95% 이상 노출되고 있으면
  });

  const idx = isLastSectionActive // 4. 마지막 section 은 95% 이상 요소가 노출중일 경우 우선해서 nav active
    ? sectionIds.length - 1
    : Math.max(
        visibleSections.findIndex((v) => v), // 2. 노출 중인 section 이 2개 이상일 경우 첫 번째 section nav 에 active
        0 // 3. 노출 중인 index가 없는 경우 첫 번째 nav 를 active
      );
  activeNavEl.classList.remove("active");
  activeNavEl = document.querySelector(`a[href="${sectionIds[idx]}"]`);
  activeNavEl.classList.add("active");
};
const headerHeight = document.querySelector(".header").offsetHeight;
const options = {
  root: document.querySelector("#scrollArea"),
  // rootMargin: `-${headerHeight}px 0px 0px 0px`,
  rootMargin: "-20% 0px 0px 0px", // screen 사이즈보다 observe 할 화면을 작게 만들어서 관찰
  threshold: [0, 0.98], // 처음 화면에 요소가 노출될 때와 98% 노출될 때 callback function
};
const observer = new IntersectionObserver(callback, options);
sectionIds.forEach((sectionId) => {
  observer.observe(document.querySelector(sectionId));
});

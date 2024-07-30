const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { nav } = entry.target.dataset;
    const visible = entry.isIntersecting;
    const el = document.querySelector(`.header__menu__item[data-nav="${nav}"]`);
    if (visible) el.classList.add("active");
    else el.classList.remove("active");
  });
};

const observer = new IntersectionObserver(callback, { threshold: 0.7 });
observer.observe(document.querySelector("#home"));
observer.observe(document.querySelector("#about"));
observer.observe(document.querySelector("#skills"));
observer.observe(document.querySelector("#work"));
observer.observe(document.querySelector("#testimonial"));
observer.observe(document.querySelector("#contact"));

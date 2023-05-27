// Фиксированный header

const links = document.querySelectorAll(".header__link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// Кнопка при скролле
const btnScrollTop = document.querySelector(".btn-scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    btnScrollTop.classList.add("show");
  } else {
    btnScrollTop.classList.remove("show");
  }
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Кнопка изменения темы

const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  document.body.classList.toggle("dark-mode");
});

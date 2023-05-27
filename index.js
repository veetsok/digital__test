// Получаем контейнер для карточек товаров

const productsContainer = document.querySelector(".product-container");

const phoneContainer = document.querySelector(".phone-container");
const headphonesContainer = document.querySelector(".headphones-container");
const watchContainer = document.querySelector(".watch-container");

// Карточки Товаров
products.forEach((product) => {
  // Создаем элементы карточки товара
  const card = document.createElement("div");
  card.classList.add("product-card");

  const imageElement = document.createElement("div");
  const imageEl = document.createElement("img");
  imageElement.classList.add("product-card__image");
  imageEl.src = `${product.image}`;
  imageEl.alt = `${product.name}`;
  imageElement.appendChild(imageEl);

  const titleElement = document.createElement("div");
  titleElement.classList.add("product-card__title");
  titleElement.textContent = product.name;

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.textContent = product.description;

  /// Дата добавления

  const dateAddedElement = document.createElement("div");
  const dateAddedSpan = document.createElement("span");
  dateAddedElement.classList.add("date-added");
  dateAddedSpan.classList.add("formatted-date");
  dateAddedSpan.textContent = getDayInfo(product.dateAdded);
  dateAddedElement.textContent = `Дата добавления: ${dateAddedSpan.textContent}`;

  const buyButton = document.createElement("button");
  buyButton.classList.add("buy-btn");
  buyButton.textContent = "Купить";

  // Добавляем элементы карточки в контейнер
  card.appendChild(imageElement);
  card.appendChild(titleElement);
  card.appendChild(descriptionElement);
  card.appendChild(buyButton);
  card.appendChild(dateAddedElement);

  productsContainer.appendChild(card);

  ////// Отбор Заголовков ассортимента
  if (product.category === "phone") {
    phoneContainer.querySelector(".product-cards").appendChild(card);
  } else if (product.category === "headphones") {
    headphonesContainer.querySelector(".product-cards").appendChild(card);
  } else if (product.category === "watch") {
    watchContainer.querySelector(".product-cards").appendChild(card);
  }

  buyButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    const modalProductName = document.querySelector(".modal-product-name");
    const modalProductImage = document.querySelector(".modal-product-image");

    const closeModalButton = document.querySelector(".close-modal");
    modalProductName.textContent = product.name;
    modalProductImage.innerHTML = `<img src=${product.image} alt=${product.name} />`;
    modal.style.display = "flex";

    products.forEach((product) => {
      const card = document.createElement("div");
    });

    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    const quantityInput = document.getElementById("quantity-input");
    const increaseBtn = document.getElementById("increase-btn");
    const decreaseBtn = document.getElementById("decrease-btn");

    increaseBtn.addEventListener("click", (event) => {
      quantityInput.stepUp();
    });

    decreaseBtn.addEventListener("click", (event) => {
      quantityInput.stepDown();
    });

    const form = modal.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const quantity = form.elements.quantity.value;
      const color = form.elements.color.value;
      const comment = form.elements.comment.value;

      alert(
        `Ваш заказ ${modalProductName.innerHTML} в количестве ${quantity}шт.  ${color} цвета зарезервирован. Комментарий к заказу: ${comment}`
      );

      modal.style.display = "none";
    });
  });
});

////////////

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

//

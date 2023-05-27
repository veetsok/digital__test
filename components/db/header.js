const sections = [
  { title: "Все", url: "#" },
  { title: "Смартфоны", url: "#" },
  { title: "Смарт-часы", url: "#" },
  { title: "Наушники", url: "#" },
];

function generateMenuItems(sections) {
  const menuItems = sections.map((section) => {
    const menuItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = section.title;
    link.href = section.url;

    menuItem.appendChild(link);

    return menuItem;
  });

  return menuItems;
}

function renderMenu(menuItems) {
  const menu = document.querySelector(".menu");

  menuItems.forEach((item) => {
    menu.appendChild(item);
  });
}

const menuItems = generateMenuItems(sections);
renderMenu(menuItems);

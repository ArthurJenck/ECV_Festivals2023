const FESTIVALS = [
  {
    festName: "SOLIDAYS.",
  },
  {
    festName: "Lollapalooza Paris.",
  },
  {
    festName: "Francofolies de La Rochelle.",
  },
  {
    festName: "Rock en Seine.",
  },
  {
    festName: "Main Square Festival.",
  },
  {
    festName: "Festival de Nîmes.",
  },
  {
    festName: "Hellfest.",
  },
  {
    festName: "Vieilles Charrues.",
  },
  {
    festName: "Les Eurockéennes de Belfort.",
  },
  {
    festName: "Art Rock.",
  },
  {
    festName: "Le Delta Festival.",
  },
  {
    festName: "Le Printemps de Bourges.",
  },
  {
    festName: "WE LOVE GREEN.",
    isCurrent: true,
  },
];

const body = document.querySelector("body");
const menuList = document.querySelector(".menu-list");

const generateMenu = () => {
  FESTIVALS.forEach((festival) => {
    festival.festName = festival.festName.toUpperCase();
    const newListElement = document.createElement("li");
    newListElement.classList.add("menu-link");
    if (festival.isCurrent) {
      newListElement.classList.add("current-link");
    }
    const liLink = document.createElement("a");
    liLink.setAttribute("href", "#");
    liLink.innerText = festival.festName;
    newListElement.appendChild(liLink);
    menuList.appendChild(newListElement);
  });
};

generateMenu();

// ----------------

let menuIsOpen = false;
const displayMenu = () => {
  if (menuIsOpen === false) {
    menuIsOpen = true;
    openMenu();
  } else {
    menuIsOpen = false;
    closeMenu();
  }
};

const menuContainer = document.querySelector(".hamb-menu");
const openCloseBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".close-container");

const openMenu = () => {
  menuContainer.classList.add("visible");
};
const closeMenu = () => {
  menuContainer.classList.remove("visible");
};

openCloseBtn.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", displayMenu);

console.log(FESTIVALS.length);

// Mobile nav menu
const navi = document.querySelector(".navi");
const mobileNav = document.querySelector(".mobile-nav");
const mobileClose = document.querySelector(".mobile-close");

mobileNav.addEventListener("click", () => navi.classList.add("show-nav"));
mobileClose.addEventListener("click", () => navi.classList.remove("show-nav"));

// Dropdown
const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const navMenu = document.querySelector(".nav-menu");
const options = document.querySelectorAll(".nav-menu li");
const selected = document.querySelector(".selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  navMenu.classList.toggle("nav-menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    navMenu.classList.remove("nav-menu-open");

    options.forEach((option) => {
      option.classList.remove("active");
    });

    option.classList.add("active");
  });
});

// Menu
const cardData = [
  {
    imgSrc: "/img/menu1.jpg",
    title: "Big Burger",
    description: "A mouth-watering burger with a generous serving of beef, fresh vegetables, and special sauce.",
    price: "$5.00",
  },
  {
    imgSrc: "/img/menu2.jpg",
    title: "Spicy Chicken Sandwich",
    description: "Spice up your day with our delicious spicy chicken sandwich, featuring crispy chicken and spicy mayo.",
    price: "$6.50",
  },
  {
    imgSrc: "/img/menu3.jpg",
    title: "Vegetarian Pizza",
    description: "Indulge in the flavors of our vegetarian pizza, topped with a variety of fresh vegetables and gooey cheese.",
    price: "$8.00",
  },
  {
    imgSrc: "/img/menu4.jpg",
    title: "Fresh Salad",
    description: "Stay healthy with our refreshing fresh salad, packed with crisp greens, colorful vegetables, and your choice of dressing.",
    price: "$4.50",
  },
  {
    imgSrc: "/img/menu5.jpg",
    title: "Sushi Platter",
    description: "Experience the art of sushi with our carefully crafted sushi platter, featuring a variety of rolls and sashimi.",
    price: "$12.00",
  },
  {
    imgSrc: "/img/menu6.jpg",
    title: "Classic Pasta",
    description: "Savor the classic flavors of our pasta, cooked to perfection and served with your favorite sauce.",
    price: "$7.50",
  },
  {
    imgSrc: "/img/menu7.jpg",
    title: "Chocolate Brownie",
    description: "Indulge your sweet tooth with our rich and fudgy chocolate brownie, served warm with a scoop of vanilla ice cream.",
    price: "$3.50",
  },
  {
    imgSrc: "/img/menu8.jpg",
    title: "Fruit Smoothie",
    description: "Refresh yourself with our delicious fruit smoothie, made with a blend of fresh fruits and natural sweetness.",
    price: "$4.00",
  },
  {
    imgSrc: "/img/menu9.jpg",
    title: "Iced Coffee",
    description: "Get a caffeine boost with our refreshing iced coffee, served with ice and your choice of milk or cream.",
    price: "$3.00",
  },
  {
    imgSrc: "/img/menu10.jpg",
    title: "Cheese Platter",
    description: "Cheese lovers rejoice! Our cheese platter features a delightful selection of cheeses paired with crackers and fruits.",
    price: "$9.50",
  },
  {
    imgSrc: "/img/menu9.jpg",
    title: "Iced Coffee",
    description: "Get a caffeine boost with our refreshing iced coffee, served with ice and your choice of milk or cream.",
    price: "$3.00",
  },
  {
    imgSrc: "/img/menu10.jpg",
    title: "Cheese Platter",
    description: "Cheese lovers rejoice! Our cheese platter features a delightful selection of cheeses paired with crackers and fruits.",
    price: "$9.50",
  },
];

function createCard(card) {
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";

  var cardContentDiv = document.createElement("div");
  cardContentDiv.className = "card-content";

  var menuImageDiv = document.createElement("div");
  menuImageDiv.className = "menu-image";
  var img = document.createElement("img");
  img.src = card.imgSrc;
  img.alt = "Menu Image";
  menuImageDiv.appendChild(img);

  var menuDescDiv = document.createElement("div");
  menuDescDiv.className = "menu-desc";
  var productNameDiv = document.createElement("div");
  productNameDiv.textContent = card.title;
  var priceDiv = document.createElement("div");
  priceDiv.textContent = card.price;
  var descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = card.description;
  menuDescDiv.appendChild(productNameDiv);
  menuDescDiv.appendChild(priceDiv);
  menuDescDiv.appendChild(descriptionDiv);

  // Buat elemen div dengan class "rating" dan tambahkan bintang-bintang
  var ratingDiv = document.createElement("div");
  ratingDiv.className = "rating";
  for (var i = 0; i < 4; i++) {
    var starIcon = document.createElement("i");
    starIcon.className = "fa-solid fa-star";
    ratingDiv.appendChild(starIcon);
  }
  var regularStarIcon = document.createElement("i");
  regularStarIcon.className = "fa-regular fa-star";
  ratingDiv.appendChild(regularStarIcon);

  // Buat elemen div dengan class "menu-button" dan tambahkan tombol-tombol
  var menuButtonDiv = document.createElement("div");
  menuButtonDiv.className = "menu-button";
  var orderBtn = document.createElement("button");
  orderBtn.textContent = "Order Now";
  var infoBtn = document.createElement("button");
  infoBtn.textContent = "More Info";
  menuButtonDiv.appendChild(orderBtn);
  menuButtonDiv.appendChild(infoBtn);

  // Tambahkan elemen-elemen ke dalam elemen "card-content"
  cardContentDiv.appendChild(menuImageDiv);
  cardContentDiv.appendChild(menuDescDiv);
  cardContentDiv.appendChild(ratingDiv);
  cardContentDiv.appendChild(menuButtonDiv);

  cardDiv.appendChild(cardContentDiv);

  document.querySelector(".content").appendChild(cardDiv);
}

// Loop melalui data dan panggil fungsi createCard untuk setiap objek data
for (var i = 0; i < cardData.length; i++) {
  createCard(cardData[i]);
}

let span_right = document.querySelector(".btn-right");
let span_left = document.querySelector(".btn-left");
let product = document.getElementsByClassName("card");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.1;
let maxMove = 203;

// tablet view
let tab_view = window.matchMedia("(max-width: 1200px)");
if (tab_view.matches) {
  movePer = 50.2;
  maxMove = 530;
}

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 83.36;
  maxMove = 930;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
span_right.onclick = () => {
  right_mover();
};
span_left.onclick = () => {
  left_mover();
};

// Award
const awardsData = [
  {
    imgSrc: "/img/award01.png",
    altText: "Award 1",
    title: "Best Restaurant of the Year",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/img/award02.png",
    altText: "Award 2",
    title: "Culinary Excellence Award",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imgSrc: "/img/award03.png",
    altText: "Award 3",
    title: "Outstanding Chef Award",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const awardContainer = document.querySelector(".award-container");

awardsData.forEach((award) => {
  const awardItem = document.createElement("div");
  awardItem.classList.add("award-item");

  const img = document.createElement("img");
  img.src = award.imgSrc;
  img.alt = award.altText;

  const h3 = document.createElement("h3");
  h3.textContent = award.title;

  const p = document.createElement("p");
  p.textContent = award.description;

  const button = document.createElement("button");
  button.className = "award-button";
  button.textContent = "View More";

  awardItem.appendChild(img);
  awardItem.appendChild(h3);
  awardItem.appendChild(p);
  awardItem.appendChild(button);

  awardContainer.appendChild(awardItem);
});

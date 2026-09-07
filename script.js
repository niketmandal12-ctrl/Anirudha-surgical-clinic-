const nav = document.getElementById("nav");
const menu = document.getElementById("menu");


// MOBILE MENU

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelectorAll("#nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });

});


// PRODUCT DATA

const products = {

  medicine: [
    "Prescription medicines",
    "Over-the-counter healthcare products",
    "Basic first-aid essentials"
  ],

  personal: [
    "Skincare products",
    "Hygiene essentials",
    "Everyday personal-care products"
  ],

  supplements: [
    "Vitamins",
    "Mineral supplements",
    "General wellness products"
  ]

};


// MODAL

const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const items = document.getElementById("modal-items");
const note = document.getElementById("modal-note");


// OPEN PRODUCT POPUP

document.querySelectorAll(".product-card").forEach(card => {

  card.addEventListener("click", () => {

    const category = card.dataset.category;

    if(category === "medicine"){
      title.textContent = "Medicines";
    }

    if(category === "personal"){
      title.textContent = "Personal Care";
    }

    if(category === "supplements"){
      title.textContent = "Vitamins & Supplements";
    }

    note.textContent =
      "Product availability may vary. Prescription medicines should be used only as directed by a qualified healthcare professional.";

    items.innerHTML = products[category]
      .map(item => `<div>✓ ${item}</div>`)
      .join("");

    modal.classList.add("open");

  });

});


// CLOSE MODAL

document.getElementById("close").addEventListener("click", () => {

  modal.classList.remove("open");

});


modal.addEventListener("click", event => {

  if(event.target === modal){
    modal.classList.remove("open");
  }

});


document.addEventListener("keydown", event => {

  if(event.key === "Escape"){
    modal.classList.remove("open");
  }

});

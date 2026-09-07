const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

const categoryNames = {
    medicine: "Medicines",
    personal: "Personal Care",
    supplements: "Vitamins & Supplements"
};

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        modalTitle.textContent =
            categoryNames[category] || "Products";

        modal.classList.add("active");

    });

});


closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.classList.remove("active");
    }

});


document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){
        modal.classList.remove("active");
    }

});

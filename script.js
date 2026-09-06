const products = {
 medicine: [
  ["Paracetamol 500 mg","paracetamol.svg","Pain/fever medicine"],
  ["Cetirizine 10 mg","cetirizine.svg","Allergy medicine"],
  ["Pantoprazole 40 mg","pantoprazole.svg","Acid-related medicine"],
  ["Amoxicillin 500 mg","amoxicillin.svg","Antibiotic — prescription may be required"]
 ],
 personal: [
  ["The Derma Co Face Care","dermaco.svg","Personal care"],
  ["Cetaphil Skin Care","cetaphil.svg","Gentle skin care"],
  ["CeraVe Moisturizer","cerave.svg","Moisturizing care"],
  ["Simple Face Wash","simple.svg","Facial cleansing"]
 ],
 supplements: [
  ["Vitamin C 1000 mg","vitamin-c.svg","Vitamin supplement"],
  ["Vitamin D3","vitamin-d3.svg","Vitamin supplement"],
  ["Zinc","zinc.svg","Mineral supplement"],
  ["Multivitamin Tablets","multivitamin.svg","Multivitamin supplement"]
 ]
};

const modal=document.getElementById("productModal");
const grid=document.getElementById("productGrid");
const title=document.getElementById("modalTitle");
const label=document.getElementById("modalLabel");

function openCategory(cat){
  const names={medicine:"Medicines",personal:"Personal Care",supplements:"Vitamins & Supplements"};
  label.textContent="ANIRUDHA SURGICAL CLINIC";
  title.textContent=names[cat];
  grid.innerHTML=products[cat].map(p=>`
    <article class="product">
      <img src="assets/${p[1]}" alt="${p[0]}">
      <div><h3>${p[0]}</h3><p>${p[2]}</p></div>
    </article>`).join("");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}
document.querySelectorAll("[data-category]").forEach(el=>el.addEventListener("click",()=>openCategory(el.dataset.category)));
document.querySelector(".close").addEventListener("click",()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")});
modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("show")});

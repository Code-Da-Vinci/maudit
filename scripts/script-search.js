const SEARCH = document.querySelector(".article__input");
const SMS = document.querySelector(".article__resultado");
const CLEAR = document.querySelector(".article__icon");

const ALL_YEARS = document.querySelectorAll(".section");

function match() {
   let valueSearch = SEARCH.value.trim().toLowerCase();
   //console.log(valueSearch);
   
   
   if (valueSearch === "") {
      SEARCH.value = "";
      SMS.textContent = "...";

      ALL_YEARS.forEach(element => {
         element.style.display = "flex";
         
      });
      return
   };
   
   SMS.textContent = "Ninguna coincidencia";

   ALL_YEARS.forEach(element => {
      element.style.display = "none";

      let valueTitle = element.querySelector(".section__title");

      if (valueTitle.textContent.toLowerCase().includes(valueSearch)) {
         element.style.display = "flex";

         SMS.textContent = "Coincidencias encontradas";
         
      };
   });
};

function clearSearch() {
   SEARCH.value = "";
   SEARCH.focus();
   SMS.textContent = "...";

   ALL_YEARS.forEach(element => {
      element.style.display = "flex";
         
   });
};

SEARCH.addEventListener("input", match);
CLEAR.addEventListener("click", clearSearch);

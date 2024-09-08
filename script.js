const swiper = new Swiper(".swiper", {
   effect: "coverflow",
   loop: true,
   grabCursor: true,
   centerSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 350,
   },
});

const search = document.querySelector(".article__input");
const btn = document.querySelector(".article__icon");
const title = document.querySelectorAll(".section");
const resultado = document.querySelector(".article__resultado");

const comparar = function() {
   let inputValue = search.value.trim().toLowerCase();
   
   if (search.value.trim() === "") {
      search.value = "";
      search.focus();
      resultado.textContent = "Ingrese un texto";
      title.forEach((elem) => {
         elem.style.display = "flex";
       
      });
      return
   };
   
   let coincide = false;
   
   title.forEach((elem) => {
      if (elem.querySelector(".section__title").textContent.toLowerCase().includes(inputValue)) {
         elem.style.display = "flex";
         coincide = true;
         
      } else {
         elem.style.display = "none";
         
      };
   });

   resultado.textContent = coincide ? "Coincidencias encontradas" : "No se encontraron coincidencias";
   
};

const buscar = function() {
   comparar();
};

const borrar = function(tecla) {
   if (tecla.code === "Backspace") {
      comparar();
   };
};

search.addEventListener("input", comparar);
btn.addEventListener("click", buscar);
document.addEventListener("keyup", borrar);
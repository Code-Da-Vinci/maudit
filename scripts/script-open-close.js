const OPEN_CLOSE = document.querySelector(".header__open__close");
const LIST = document.querySelector(".header__details");

function openList() {
   
   if (OPEN_CLOSE.classList.contains("bi-x")) {
      OPEN_CLOSE.classList.toggle("bi-x", false);
      LIST.open = "false";
      LIST.style.display = "none"
      
   } else {
      OPEN_CLOSE.classList.toggle("bi-x", true);
      LIST.style.display = "flex"
      LIST.open = "true";
   };
};

OPEN_CLOSE.addEventListener("click", openList);
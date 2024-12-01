const YEAR_2023 = [
   {
      codeLetter: "DATYSV",
      name: "Maudit - Despedida al tiempo y su veneno"
   },
   {
      codeLetter: "SA",
      name: "Maudit ft. Soma - Sentimientos anodinos"
   },
   {
      codeLetter: "CORROSION",
      name: "Maudit ft. Salaí - Corrosión"
   },
   {
      codeLetter: "ADET",
      name: "Maudit - Asqueado de este tormento"
   },
   {
      codeLetter: "AAA",
      name: "Maudit - Abrazo al abismo"
   },
   {
      codeLetter: "OMNIPRESENCIA",
      name: "Maudit - Omnipresencia"
   },
   {
      codeLetter: "LFF",
      name: "Maudit ft. SMOG - La femme fatale"
   },
   {
      codeLetter: "LOCURA",
      name: "Maudit - Locura"
   },
   {
      codeLetter: "BYDS",
      name: "Maudit ft. Poeta impío - Bella y deyecta sentencia"
   },
   {
      codeLetter: "TDG",
      name: "Maudit - Tiempos de guerra"
   },
   {
      codeLetter: "BUFON",
      name: "Maudit - Bufón"
   },
   {
      codeLetter: "FDP",
      name: "Maudit - Fecha de pago (Recaída IV?)"
   },
   {
      codeLetter: "SUELTAME",
      name: "Maudit - Suéltame"
   },
   {
      codeLetter: "EVITATIVO",
      name: "Maudit - Evitativo (Recaída III)"
   },
   {
      codeLetter: "INESTABILIDAD",
      name: "Maudit ft. Salaí - Inestabilidad"
   },
   {
      codeLetter: "ACLARAME",
      name: "Maudit - Aclárame"
   },
   {
      codeLetter: "USM",
      name: "Maudit - Uña sin mugre (Recaída II)"
   },
   {
      codeLetter: "CONGELADO",
      name: "Maudit - Congelado"
   },
   {
      codeLetter: "DESGARRADOR",
      name: "Maudit - Desgarrador"
   },
   {
      codeLetter: "SOMBRA",
      name: "Maudit ft. Black - Sombra"
   },
   {
      codeLetter: "LQD",
      name: "Maudit - Lo que daría (Prod. Jurrivh)"
   },
   {
      codeLetter: "MF",
      name: "Maudit - Mirada fría"
   },
   {
      codeLetter: "MALESTAR",
      name: "Maudit - Malestar"
   },
   {
      codeLetter: "ABANDONO",
      name: "Maudit - Abandono"
   },
   {
      codeLetter: "SUSPIRO",
      name: "Maudit - Suspiro..."
   },
   {
      codeLetter: "MM",
      name: "Maudit - Momento mori"
   },
]; 

const CONTAINER_2023 = document.querySelector(".header__year__2023");
const WORKS_2023 = document.querySelector(".article__container_2023");

YEAR_2023.forEach(element => {
   CONTAINER_2023.insertAdjacentHTML('beforeend', `<a class="header__details__name" href="letra23/${element.codeLetter}.html">${element.name} [Letra]</a>
   `);
   
   WORKS_2023.insertAdjacentHTML('beforeend', `
      <section class="section">
      <a class="section__link__img"href="letra23/${element.codeLetter}.html">
         <picture class="section__picture">
            <source class="section__imagen"srcset="img2023/M_${element.codeLetter}.webp" type="image/webp">
            <source class="section__imagen"srcset="img2023/M_${element.codeLetter}.jpg" type="image/jpeg">
            <img class="section__imagen"src="img2023/M_${element.codeLetter}.webp" alt="${element.name}">
         </picture>
      </a>
      <a class="section__link__title"href="letra24/${element.codeImg}.html">
         <h2 class="section__title">${element.name} [Letra]</h2>
      </a>
   </section>`);
   
});
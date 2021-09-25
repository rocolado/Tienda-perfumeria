let slidersPromos = document.querySelectorAll(".slidersPromos");

let btnCirculo1 = document.querySelector("#circulo1"),
    btnCirculo2 = document.querySelector("#circulo2"),
    btnCirculo3 = document.querySelector("#circulo3");


const cambioCirculos = () => {
    // circulo slider1
    btnCirculo1.classList.replace("far", "fas");
    btnCirculo2.classList.replace("fas", "far");
    btnCirculo3.classList.replace("fas", "far");

    // circulo slider2
    btnCirculo1.classList.replace("fas", "far");
    btnCirculo2.classList.replace("far", "fas");
    btnCirculo3.classList.replace("fas", "far");
}


btnCirculo1.addEventListener("click", () => {
    // slider1 tamaño grande y pequeño
    slidersPromos[0].style.display = "flex";
    slidersPromos[3].style.display = "flex"; 

    slidersPromos[1].style.display = "none";
    slidersPromos[2].style.display = "none";
    slidersPromos[4].style.display = "none";
    slidersPromos[5].style.display = "none";

    cambioCirculos();
});


btnCirculo2.addEventListener("click", () => {
    // slider2 tamaño grande y pequeño
    slidersPromos[1].style.display = "flex";
    slidersPromos[4].style.display = "flex";
    
    slidersPromos[0].style.display = "none";
    slidersPromos[2].style.display = "none";
    slidersPromos[3].style.display = "none";
    slidersPromos[5].style.display = "none";
});


btnCirculo3.addEventListener("click", () => {
    // slider3 tamaño grande y pequeño
    slidersPromos[2].style.display = "flex";
    slidersPromos[5].style.display = "flex";

    slidersPromos[0].style.display = "none";
    slidersPromos[1].style.display = "none";
    slidersPromos[3].style.display = "none";
    slidersPromos[4].style.display = "none";

    btnCirculo1.classList.replace("fas", "far");
    btnCirculo2.classList.replace("fas", "far");
    btnCirculo3.classList.replace("far", "fas");
});

/* primer slider */

let btnCirculo1 = document.querySelector("#circulo1"),
    btnCirculo2 = document.querySelector("#circulo2"),
    btnCirculo3 = document.querySelector("#circulo3");

const slidesPromos = document.querySelectorAll(".slidesPromos");

const primerSlider = document.querySelectorAll(".primerSlider");
const segundoSlider = document.querySelectorAll(".segundoSlider");
// const circuloSlider = document.querySelectorAll(".circuloSlider");

let slideIndex1 = 0;
let slideIndex2 = 0;
let circulosIndex = 0;


/* slider marcas */

let logos = document.querySelectorAll(".imgLogos");

let prev = document.querySelector("#prev"),
    next = document.querySelector("#next");


/* función mostrar primer slider (versión móvil) */

const mostrarPrimerSlider = () => {
    primerSlider[0].style.display = "none";
    
    for (let i = 1; i < primerSlider.length; i++) {
        primerSlider[i].style.display = "none";
    }
    
    slideIndex1++;
    
    if (slideIndex1 > primerSlider.length) {
        slideIndex1 = 1;
    }
    
    primerSlider[slideIndex1-1].style.display = "block";
    setTimeout(mostrarPrimerSlider, 2000);
}


/* función mostrar primer slider (versión ordenador) */

const mostrarSegundoSlider = () => {
    segundoSlider[0].style.display = "none";

    for (let i = 1; i < segundoSlider.length; i++) {
        segundoSlider[i].style.display = "none";
    }
    
    slideIndex2++;
    
    if (slideIndex2 > primerSlider.length) {
        slideIndex2 = 1;
    }

    segundoSlider[slideIndex2-1].style.display = "block";
    setTimeout(mostrarSegundoSlider, 2000);
}

mostrarPrimerSlider();
mostrarSegundoSlider();


// const cambioCirculos = () => {
//     circuloSlider[0].classList.add("far");
//     // console.log(circuloSlider);

//     for (let i = 1; i < circuloSlider.length; i++) {
//         // circuloSlider[i].classList.replace("fas", "far");
//         circuloSlider[i].classList.add("fas");
//     }

//     circulosIndex++;

//     if (circulosIndex > circuloSlider.length) {
//         circulosIndex = 1;
//     }

//     // circuloSlider[circulosIndex-1].classList.replace("far", "fas");
//     circuloSlider[circulosIndex-1].classList.add("fas");
//     // console.log(circuloSlider);
//     setTimeout(cambioCirculos, 2000);
// }

// cambioCirculos();


// const cambioCirculos = () => {
//     // circulo slider1
//     btnCirculo1.classList.replace("far", "fas");
//     btnCirculo2.classList.replace("fas", "far");
//     btnCirculo3.classList.replace("fas", "far");

//     // circulo slider2
//     // btnCirculo1.classList.replace("fas", "far");
//     // btnCirculo2.classList.replace("far", "fas");
//     // btnCirculo3.classList.replace("fas", "far");
// }

/* cambio clase de círculos - primer slider */

btnCirculo1.addEventListener("click", () => {
    // slider1 tamaño grande y pequeño
    slidesPromos[0].style.display = "flex";
    slidesPromos[3].style.display = "flex"; 

    slidesPromos[1].style.display = "none";
    slidesPromos[2].style.display = "none";
    slidesPromos[4].style.display = "none";
    slidesPromos[5].style.display = "none";

    btnCirculo1.classList.replace("far", "fas");
    btnCirculo2.classList.replace("fas", "far");
    btnCirculo3.classList.replace("fas", "far");
});


btnCirculo2.addEventListener("click", () => {
    // slider2 tamaño grande y pequeño
    slidesPromos[1].style.display = "flex";
    slidesPromos[4].style.display = "flex";
    
    slidesPromos[0].style.display = "none";
    slidesPromos[2].style.display = "none";
    slidesPromos[3].style.display = "none";
    slidesPromos[5].style.display = "none";

    btnCirculo1.classList.replace("fas", "far");
    btnCirculo2.classList.replace("far", "fas");
    btnCirculo3.classList.replace("fas", "far");
});


btnCirculo3.addEventListener("click", () => {
    // slider3 tamaño grande y pequeño
    slidesPromos[2].style.display = "flex";
    slidesPromos[5].style.display = "flex";

    slidesPromos[0].style.display = "none";
    slidesPromos[1].style.display = "none";
    slidesPromos[3].style.display = "none";
    slidesPromos[4].style.display = "none";

    btnCirculo1.classList.replace("fas", "far");
    btnCirculo2.classList.replace("fas", "far");
    btnCirculo3.classList.replace("far", "fas");
});
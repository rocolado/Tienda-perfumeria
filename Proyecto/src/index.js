// let btnCirculo1 = document.querySelector("#circulo1"),
//     btnCirculo2 = document.querySelector("#circulo2"),
//     btnCirculo3 = document.querySelector("#circulo3");

const primerSlider = document.querySelectorAll(".primerSlider");
const segundoSlider = document.querySelectorAll(".segundoSlider");
const circuloSlider = document.querySelectorAll(".circuloSlider");

let slideIndex1 = 0;
let slideIndex2 = 0;
let circulosIndex = 0;


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
//         circuloSlider[i].classList.replace("fas", "far");
//     }

//     circulosIndex++;

//     if (circulosIndex > circuloSlider.length) {
//         circulosIndex = 1;
//     }

//     circuloSlider[circulosIndex-1].classList.replace("far", "fas");
//     setTimeout(cambioCirculos, 2000);
// }

// cambioCirculos();

// const cambioCirculo = () => {
//     let circuloSlider = document.querySelectorAll(".circuloSlider");

//     for (let j = 0; j < circuloSlider.length; j++) {
//         circuloSlider[j].classList.replace("far", "fas");
//     }

//     circulosIndex++;

//     if (circulosIndex > circuloSlider.length) {
//         circulosIndex = 1;
//     }

//     circuloSlider[circulosIndex-1].classList.replace("fas", "far");
//     setTimeout(showSlides,2000);
// }

// cambioCirculo();


// const cambioCirculos = () => {
//     // circulo slider1
//     btnCirculo1.classList.replace("far", "fas");
//     btnCirculo2.classList.replace("fas", "far");
//     btnCirculo3.classList.replace("fas", "far");

//     // circulo slider2
//     btnCirculo1.classList.replace("fas", "far");
//     btnCirculo2.classList.replace("far", "fas");
//     btnCirculo3.classList.replace("fas", "far");
// }


// btnCirculo1.addEventListener("click", () => {
//     // slider1 tamaño grande y pequeño
//     slidersPromos[0].style.display = "flex";
//     slidersPromos[3].style.display = "flex"; 

//     slidersPromos[1].style.display = "none";
//     slidersPromos[2].style.display = "none";
//     slidersPromos[4].style.display = "none";
//     slidersPromos[5].style.display = "none";

//     cambioCirculos();
// });


// btnCirculo2.addEventListener("click", () => {
//     // slider2 tamaño grande y pequeño
//     slidersPromos[1].style.display = "flex";
//     slidersPromos[4].style.display = "flex";
    
//     slidersPromos[0].style.display = "none";
//     slidersPromos[2].style.display = "none";
//     slidersPromos[3].style.display = "none";
//     slidersPromos[5].style.display = "none";
// });


// btnCirculo3.addEventListener("click", () => {
//     // slider3 tamaño grande y pequeño
//     slidersPromos[2].style.display = "flex";
//     slidersPromos[5].style.display = "flex";

//     slidersPromos[0].style.display = "none";
//     slidersPromos[1].style.display = "none";
//     slidersPromos[3].style.display = "none";
//     slidersPromos[4].style.display = "none";

//     btnCirculo1.classList.replace("fas", "far");
//     btnCirculo2.classList.replace("fas", "far");
//     btnCirculo3.classList.replace("far", "fas");
// });
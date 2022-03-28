// let btnCirculo1 = document.querySelector("#circulo1"),
//     btnCirculo2 = document.querySelector("#circulo2"),
//     btnCirculo3 = document.querySelector("#circulo3");

let slideIndex = 0;
let circulosIndex = 0;

const showSlides = () => {
    let slidesPromos = document.querySelectorAll(".slidesPromos");
    slidesPromos[0].style.display = "flex";
    
    for (let i = 1; i < slidesPromos.length; i++) {
        slidesPromos[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slidesPromos.length) {
        slideIndex = 1;
    }
    
    slidesPromos[slideIndex-1].style.display = "block";
    setTimeout(showSlides,2000);
}

const cambioCirculo = () => {
    let circuloSlider = document.querySelectorAll(".circuloSlider");

    for (let j = 0; j < circuloSlider.length; j++) {
        circuloSlider[j].classList.replace("far", "fas");
    }

    circulosIndex++;

    if (circulosIndex > circuloSlider.length) {
        circulosIndex = 1;
    }

    circuloSlider[circulosIndex-1].classList.replace("fas", "far");
    setTimeout(showSlides,2000);
}

showSlides();
cambioCirculo();


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

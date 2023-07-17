setTimeout(myFunction,6000);

const banner = document.getElementById("home");

function myFunction (){
    banner.style.backgroundImage = "url('./img/FONDO_IMAGEN_PRINCIPAL4.png')";
    setTimeout(myFunction2,6000);
}

function myFunction2(){
    banner.style.backgroundImage = "url('./img/FONDO_IMAGEN_PRINCIPAL2.png')";
    setTimeout(myFunction3,6000);
}

function myFunction3(){
    banner.style.backgroundImage = "url('./img/FONDO_IMAGEN_PRINCIPAL3.png')";
    setTimeout(myFunction4,6000);
}

function myFunction4(){
    banner.style.backgroundImage = "url('./img/FONDO_IMAGEN_PRINCIPAL.png')";
    setTimeout(myFunction,6000);
}

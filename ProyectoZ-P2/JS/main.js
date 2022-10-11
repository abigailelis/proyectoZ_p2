addEventListener('DOMContentLoaded', iniciarPagina);
function iniciarPagina(){
    //Dentro de esta función debe ir todo el código JS para que se ejecute luego de que se haya cargado el DOM
    let boton_menu = document.querySelector('#logoMenu');
    let menu_desplegable = document.querySelector('#navegadorPrincipal');
    boton_menu.addEventListener('click', desplegar);
    let abrirNoticia = document.querySelector(".desplegarNoticia");
    abrirNoticia.addEventListener('click', desplegar);


    function desplegar(){
        menu_desplegable.classList.toggle("desplegado");
        menu_desplegable.classList.toggle("oculto");
        abrirNoticia.classList.toggle("desplegado");
    }
}

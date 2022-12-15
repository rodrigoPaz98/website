
let efectoTarjeta = e => {

	let elemento = $(e.target);
	let tarjeta = $('.title-card');
	let contenido = $('.content-card');

	tarjeta.removeClass('scale-title-card');
	contenido.removeClass('show-content-card');

	if (elemento.closest(tarjeta).length){

		elemento.addClass('scale-title-card');
		
	}
    
}

$(document).ready(function(){

});

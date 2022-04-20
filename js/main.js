let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo,clave, usuario;

window.onload = function(){
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	correo = document.getElementById("correo");
	clave = document.getElementById("clave");
	ventana = document.getElementById("ventana");
	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",procesarEnvio);
	btn_cerrar_modal.addEventListener("click",cerrarVentana);

	setTimeout(hideURLbar, 0);

}

function abrirVentana(){
	ventana.classList.remove("hidden");
}

function cerrarVentana(evento){
	location.href = "login.html";
}

function procesarEnvio(evento){

	let txt_correo,txt_clave;
	let str_usuario;
	txt_correo = correo.value;
	txt_clave = md5(clave.value);

	usuario = {
		correo:txt_correo,
		clave:txt_clave
	};

	str_usuario = JSON.stringify(usuario);
	localStorage.setItem("usuario",str_usuario);

	//ventana.showModal();
	abrirVentana();
	evento.preventDefault();

	//console.log(evento.target);

}

function hideURLbar() {
    window.scrollTo(0, 1);
}
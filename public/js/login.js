import Nube from './nube/Nube.js'

let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo,clave, usuario, imagen, titulo,mensaje;
let nube;

window.onload = iniciarLogin()

function iniciarLogin(){
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	mensaje = document.querySelector("#ventana p");
	titulo = document.querySelector("#ventana h1");
	imagen = document.querySelector("#ventana span");
	correo = document.getElementById("correo");
	clave = document.getElementById("clave");
	ventana = document.querySelector("#ventana");
	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",procesarLogin);
	btn_cerrar_modal.addEventListener("click",cerrarVentana);
	nube = new Nube();
}

function abrirVentana(){
	ventana.classList.remove("hidden");
}

function cerrarVentana(evento){
	//ventana.classList.add("hidden");
	
}

async function procesarLogin(evento){

	
	evento.preventDefault();
	const response = await nube.register(correo.value, clave.value);
	if (!response.error) {
		alert("Usuario registrado con éxito");
		location.href = "index.html";
	}
	else {
		alert("Usuario no registrado");
		console.error(response.msg);
	}
	//console.log(evento.target);

}
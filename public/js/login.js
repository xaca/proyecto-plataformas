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
	formulario.addEventListener("submit", procesarLogin);
	nube = new Nube();
}

async function procesarLogin(evento){

	
	evento.preventDefault();
	await nube.login(correo.value, clave.value);
	//console.log(evento.target);

}
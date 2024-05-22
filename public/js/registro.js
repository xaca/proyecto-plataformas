import Nube from './nube/Nube.js'

let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo,clave,nombre,celular, usuario,imagen, titulo,mensaje;
let nube;

window.onload = iniciarRegistro()

function iniciarRegistro(){
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	correo = document.getElementById("correo");
	nombre = document.getElementById("nombre");
	celular = document.getElementById("celular");
	clave = document.getElementById("clave");
	ventana = document.getElementById("ventana");

	mensaje = document.querySelector("#ventana p");
	titulo = document.querySelector("#ventana h1");
	imagen = document.querySelector("#ventana span");

	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", procesarRegistro);

	nube = new Nube();
}

async function procesarRegistro(evento){

	let txt_correo,txt_clave,txt_celular,txt_nombre;
	let str_usuario;
	txt_correo = correo.value;
	txt_nombre = nombre.value;
	txt_celular = celular.value;
	txt_clave = clave.value;

	usuario = {
		correo: txt_correo,
		clave: txt_clave,
		celular: txt_celular,
		nombre: txt_nombre
	};

	str_usuario = JSON.stringify(usuario);
	localStorage.setItem("usuario", str_usuario);
	
	evento.preventDefault();

	await nube.register(correo.value, clave.value);
}
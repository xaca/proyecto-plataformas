import Nube from './nube/Nube.js'

window.onload = async function(){
    let nube = new Nube();
    const btnCerrarSesion = document.getElementById("btnLogout")

    btnCerrarSesion.addEventListener("click", async () => {
        await nube.logOut();
    })

}
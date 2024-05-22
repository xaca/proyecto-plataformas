/* import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

class Nube {
  constructor() {
    /* Esta información llega de: Configuración de proyecto / app web js / npm */
    this.config = {
      apiKey: "AIzaSyAD-yFl84KOGJmnfKXY9R6Szh0Ozdz2LVI",
      authDomain: "proyecto-plataformas-upb.firebaseapp.com",
      projectId: "proyecto-plataformas-upb",
      storageBucket: "proyecto-plataformas-upb.appspot.com",
      messagingSenderId: "511980674112",
      appId: "1:511980674112:web:3e338a30b41fab7f9313a5",
    };
    this.app = initializeApp(this.config);
    this.auth = getAuth(this.app);
    /* this.db = getFirestore(this.app); */
  }

  async register(email, password) {
    await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    )
      .then((userCredential) => {
        // Signed up
        console.log("Credenciales del usuario", userCredential);
        alert("Usuario registrado exitosamente")
        location.href = "index.html";
        return userCredential;
      })
      .catch((error) => {
        console.error("Error", error);
        alert("Usuario no pudo registrado");
        return error;
      });
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.user = userCredential.user;
      console.log("Credenciales del usuario", userCredential);
      alert("Usuario logueado exitosamente")
      location.href = "index.html";
      return userCredential;
    } catch (error) {
      console.error("Error", error);
        alert("Usuario no pudo loguearse");
      return error;
    }
  }

  async logOut() {
    this.auth
      .signOut()
      .then(() => {
        alert("Se cerró sesión correctamente");
        location.href = "login.html";
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default Nube;
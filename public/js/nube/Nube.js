
/* import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'


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
    const response = await createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        return  {
          user: userCredential.user, 
        }
      })
      .catch((error) => {
        return { 
          error: true,
          errorCode: error.code,
          msg: error.message
        }
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
      return userCredential;
    } catch (error) {
      return error;
    }
  }

  async logOut() {
    this.auth
      .signOut()
      .then(() => {
        console.log("Se cerró sesión correctamente");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async nuevoUsuario() {
    return await addDoc(collection(this.db, "users"), {
      uid: this.user.uid,
      nombre: "Antonio",
      email: "abc@xyz.com",
      celular: "1234567890",
    });
  }

  async mostrarImagenes() {
    const storageRef = ref(this.storage, "images");
    listAll(storageRef)
      .then((result) => {
        result.items.forEach((imageRef) => {
          getDownloadURL(imageRef)
            .then((url) => {
              const img = document.createElement("img");
              img.src = url;
              img.style.width = "200px";
              img.style.margin = "10px";
              imagesContainer.appendChild(img);
            })
            .catch((error) => console.error(error));
        });
      })
      .catch((error) => console.error(error));
  }

  async uploadImage(file, displayImagenes) {
    const storageRef = ref(this.storage, "images/" + file.name);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        displayImagenes();
      })
      .catch((error) => console.error(error));
  }
}

export default Nube;
/*
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "a@a.com", "123456")
    .then((userCredential) => {
    // Signed in 
        console.log(userCredential);
        //const user = userCredential.user;
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
*/

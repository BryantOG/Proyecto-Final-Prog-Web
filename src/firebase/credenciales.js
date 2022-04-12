// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";


// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBLNZc-TNh_fK9bQHjl2tPuMu5D3828eU0",
  authDomain: "peliculas-prog-web.firebaseapp.com",
  projectId: "peliculas-prog-web",
  storageBucket: "peliculas-prog-web.appspot.com",
  messagingSenderId: "554970755114",
  appId: "1:554970755114:web:9306539c4ea39a17b05353",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;

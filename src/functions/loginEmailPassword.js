import firebaseApp from "../firebase/credenciales";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(firebaseApp);

async function loginEmailPassword(email, password){

    signInWithEmailAndPassword(auth, email, password)
        .catch(() => alert("Contraseña incorrecta"));
}

export default loginEmailPassword;
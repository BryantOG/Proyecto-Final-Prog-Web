import firebaseApp from "../firebase/credenciales";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { async } from "@firebase/util";

const auth = getAuth(firebaseApp);

async function loginEmailPassword(email, password){

    signInWithEmailAndPassword(auth, email, password);
   /* try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    } catch(error){
        console.log(error);
        return error;
    }*/
}

export default loginEmailPassword;
import firebaseApp from "../firebase/credenciales";
import {getFirestore, collection, doc, setDoc} from "firebase/firestore";

const db = getFirestore();

function añadirTrailer(infoTrailer){
    const collectionRef =collection(db, "Trailers");
    const docRef = doc(collectionRef, infoTrailer.Titulo);
    setDoc(docRef, infoTrailer);
}

export default añadirTrailer;
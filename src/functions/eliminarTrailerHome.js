import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function eliminarTrailerHome(trailer){
    const coleccionRef = collection(db, "Trailers");
    const docuRef = doc(coleccionRef, trailer.Titulo)
    const eliminado = await deleteDoc(docuRef);
    return eliminado;

}
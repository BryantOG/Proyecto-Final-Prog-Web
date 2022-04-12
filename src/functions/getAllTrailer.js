import firebaseApp from "../firebase/credenciales";
import {getFirestore, collection, getDocs, doc} from "firebase/firestore";
import { async } from "@firebase/util";

const db = getFirestore(firebaseApp);

export default async function getAllTrailers(){
    const Trailers = [];
    const colleccionRef = collection(db, "Trailers");
    const snapshot = await getDocs(colleccionRef);
    snapshot.forEach(doc => {
        Trailers.push(doc.data());
    });
    return Trailers;
}
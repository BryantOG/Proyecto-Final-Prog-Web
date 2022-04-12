import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore();

async function filtrarDatos(stringBusqueda){
    const docusFiltrado = [];
    const collectionRef = collection(db, "Trailers");
    const queryTitulo = query(
        collectionRef, 
        where ("Titulo", "==", stringBusqueda)
    );


    const arraySnapshots = await Promise.all([
        getDocs(queryTitulo),
        
    ]);

    arraySnapshots.forEach((snapshot)=>{
        snapshot.forEach((doc)=> {
            docusFiltrado.push(doc.data());
        });
    });

    console.log(docusFiltrado);
    return docusFiltrado;

}

export default filtrarDatos;

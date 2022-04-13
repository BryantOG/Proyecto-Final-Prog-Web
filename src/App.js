import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import  Container  from "react-bootstrap/Container";

import firebaseApp from "./firebase/credenciales";

import GestionTrailers from "./views/GestionTrailers";
import Login from "./views/Login";
import Movies from "./views/Movies";


import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); 


function App() {

  const [usuario, setUsuario] = React.useState(null);

onAuthStateChanged (auth, (usuarioFirebase) => {

  if(usuarioFirebase){
    setUsuario(usuarioFirebase);
  }else{
    setUsuario(null);
  }

})


  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="login" element={<Login />} />
        <Route path="trailers" element={usuario ? <GestionTrailers /> : <Navigate to="/login" />}/>
      </Routes>
    </Container>
  )
}

export default App;

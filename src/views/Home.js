import React from "react";
import cerrarSesion from "../functions/cerrarSesion";
import {Container, Stack, Button, Form, Table} from "react-bootstrap";
import getAllTrailers from "../functions/getAllTrailer";
import eliminarTrailerHome from "../functions/eliminarTrailerHome";


import ModalAñadir from "../components/ModalAñadir";
import ModalEditar from "../components/ModalEditar";




function Home(){
    
    const [Trailers, setTrailers] = React.useState([]);
    const [isModalAñadir, setIsModalAñadir] = React.useState(false);
    const [isModalEditar, setIsModalEditar] = React.useState(false);

    
    function actualizarEstadoTrilers(){
        getAllTrailers().then((Trailers) => {
            setTrailers(Trailers);
        });
    }

    function añadirTrailerHome(){
        setIsModalAñadir(true);
    }

    React.useEffect(() =>{
        actualizarEstadoTrilers();

    },[])


    return(
        <Container fluid>
            <ModalAñadir
                isModalAñadir = {isModalAñadir}
                setIsModalAñadir = {setIsModalAñadir}
                actualizarEstadoTrilers={actualizarEstadoTrilers}
            />

            <ModalEditar
                isModalEditar={isModalEditar}
                setIsModaEditar = {setIsModalEditar}
                actualizarEstadoTrilers = {actualizarEstadoTrilers}
            />

            <Stack direction="horizontal" className="justify-content-between">
                <h2>REGISTRO DE TRAILERS</h2>
                <Button onClick={cerrarSesion}>
                    Cerrar sesión
                </Button>
            </Stack>
            <hr/>

            <Form>
                <Stack direction="horizontal">
                    <Form.Group controlId="busqueda de trailer" className="w-75 m-3">
                        <Form.Control type="text" placeholder="Buscar"></Form.Control>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Buscar
                    </Button>
                    <Button variant="light">
                        Resetear
                    </Button>
                </Stack>
            </Form>

            <Table>
                <thead>
                    <th>Titulo</th>
                    <th>Clasificacion</th>
                    <th>Duracion</th>
                    <th>Año</th>
                    <th>Reseña</th>
                    <th>Link del trailes</th>
                    <th>Imagen de protada</th>
                </thead>
                <tbody>
                    {Trailers && Trailers.map((Trailers) =>(
                        <tr>
                            <td>{Trailers.Titulo}</td>
                            <td>{Trailers.Clasificacion}</td>
                            <td>{Trailers.Duracion}</td>
                            <td>{Trailers.Año}</td>
                            <td>{Trailers.Reseña}</td>
                            <td>{Trailers.Trailer}</td>
                            <td>{Trailers.Portada}</td>
                            <td>
                                <Button variant="dark" onClick={() =>
                                setIsModalEditar(true)}>
                                    

                                    Editar
                                </Button>
                                <Button variant="danger" onClick={() => {
                                    eliminarTrailerHome(Trailers).then(
                                        (confirmacion) => {
                                            actualizarEstadoTrilers();
                                        }
                                    );
                                    
                                    }}> 
                                    Eliminar
                                </Button>
                            </td>

                        </tr>

                    ))}                           
                    
                </tbody>
            </Table>
            <Button onClick={añadirTrailerHome}>
                Añadir Trailer

            </Button>




        </Container>
    )


}

export default Home;
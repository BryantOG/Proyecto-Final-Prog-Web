import React from "react";
import '../styles/gestion-trailers.css'
import cerrarSesion from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import getAllTrailers from "../functions/getAllTrailer";
import eliminarTrailerHome from "../functions/eliminarTrailerHome";

import ModalAñadir from "../components/ModalAñadir";
import ModalEditar from "../components/ModalEditar";
import filtrarDatos from "../functions/filtrarDatos";




function GestionTrailers({ usuario }) {

    const [Trailers, setTrailers] = React.useState([]);
    const [isModalAñadir, setIsModalAñadir] = React.useState(false);
    const [isModalEditar, setIsModalEditar] = React.useState(false);
    const [trailerEditar, setTrailerEditar] = React.useState(null);

    async function busquedaFormHandler(e) {
        e.preventDefault();
        const busqueda = e.target.busqueda.value;
        const nuevosDocus = await filtrarDatos(busqueda);
        setTrailers(nuevosDocus);
    }

    function actualizarEstadoTrilers() {
        getAllTrailers().then((Trailers) => {
            setTrailers(Trailers);
        });
    }

    function añadirTrailerGestionTrailers() {
        setIsModalAñadir(true);
    }

    React.useEffect(() => {
        actualizarEstadoTrilers();

    }, [])
    

    return (
        <Container fluid>
            <ModalAñadir
                isModalAñadir={isModalAñadir}
                setIsModalAñadir={setIsModalAñadir}
                actualizarEstadoTrilers={actualizarEstadoTrilers}
                
            />

            {trailerEditar && (
                <ModalEditar
                    isModalEditar={isModalEditar}
                    setIsModalEditar={setIsModalEditar}
                    actualizarEstadoTrilers={actualizarEstadoTrilers}
                    trailerEditar={trailerEditar}
                    setTrailerEditar={setTrailerEditar}
                />
            )}


            <Stack direction="horizontal" className="justify-content-between">
                <h2>REGISTRO DE TRAILERS</h2>
                <Button onClick={cerrarSesion}>
                    Cerrar sesión
                </Button>
            </Stack>
            <hr />

            <Form onSubmit={busquedaFormHandler}>
                <Stack direction="horizontal">
                    <Form.Group controlId="busqueda" className="w-75 m-3">
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

            <Table bordered responsive>
                <thead>
                    <th>Titulo</th>
                    <th>Clasificacion</th>
                    <th>Genero</th>
                    <th>Año</th>
                    <th>Reseña</th>
                    <th>Link del trailes</th>
                    <th>Actores</th>
                </thead>
                <tbody>
                    {Trailers && Trailers.map((Trailers) => (
                        <tr>
                            <td>{Trailers.Titulo}</td>
                            <td>{Trailers.Clasificacion}</td>
                            <td>{Trailers.Duracion}</td>
                            <td>{Trailers.Año}</td>
                            <td>{Trailers.Reseña}</td>
                            <td>{Trailers.Trailer}</td>
                            <td>{Trailers.Portada}</td>
                            <td>
                                <Button variant="dark" onClick={() => {
                                    setIsModalEditar(true);
                                    setTrailerEditar({ ...Trailers });
                                }
                                }>
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
            <Button onClick={añadirTrailerGestionTrailers}>
                Añadir Trailer

            </Button>




        </Container>
    )


}

export default GestionTrailers;
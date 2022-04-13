import React from "react";
import {Modal, Stack, Form, Button} from "react-bootstrap";
import añadirTrailer from "../functions/AñadirTrailers";


function ModalEditar({isModalEditar, setIsModalEditar, actualizarEstadoTrilers, trailerEditar, setTrailerEditar}){
    
    function editarTrailerModal(){
        const Titulo =document.getElementById("Titulo").value;
        const Clasificacion =document.getElementById("Clasificacion").value;
        const Duracion =document.getElementById("Duracion").value;
        const Año =document.getElementById("Año").value;
        const Reseña =document.getElementById("Reseña").value;
        const Trailer =document.getElementById("Trailer").value;
        const Portada =document.getElementById("Portada").value;

        const infoTrailer= {Titulo, Clasificacion, Duracion, Año, Reseña, Trailer, Portada};
        añadirTrailer(infoTrailer);

        setTrailerEditar(null);
        actualizarEstadoTrilers();
        setIsModalEditar(false);
    }

    const [trailersEstado, setTrailersEstado] = React.useState({
       ...trailerEditar
    });

    return (
        <Modal 
            show ={isModalEditar} 
            onHide = {() =>{ 
                setIsModalEditar(false);
                setTrailerEditar(null);
        
            }}
        >

            <Modal.Header>
                <Modal.Title>Editar Trailer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <Form.Control  
                            id ="Titulo"  
                            placeholder ="Titulo" 
                            type = "text" 
                            className="mb-1"
                            value= {trailersEstado?.Titulo}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                    Titulo: e.target.value,
                                })
                            }    
                        />
                        <Form.Control  
                            id ="Clasificacion"  
                            placeholder ="Clasificacion" 
                            type = "text" 
                            className="mb-1"
                            value= {trailersEstado?.Clasificacion}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                   Clasificacion: e.target.value,
                                })
                            }    
                        />
                        <Form.Control  
                            id ="Duracion"  
                            placeholder ="Duracion" 
                            type="text" 
                            className="mb-1"
                            value= {trailersEstado?.Duracion}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                    Duracion: e.target.value,
                                })
                            }    
                        />
                        <Form.Control  
                            id ="Año"  
                            placeholder ="Año" 
                            type="text" 
                            className="mb-1"
                            value= {trailersEstado?.Año}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                    Año: e.target.value,
                                })
                            }    
                        />
                        <Form.Control  
                            id ="Reseña"  
                            placeholder ="Reseña" 
                            type ="text" 
                            className="mb-1"
                            value= {trailersEstado?.Reseña}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                    Reseña: e.target.value,
                                })
                            }    
                        />
                        <Form.Control  
                            id ="Trailer"  
                            placeholder ="Link del trailer" 
                            type="text" 
                            className="mb-1"
                            value= {trailersEstado?.Trailer}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                    Trailer: e.target.value,
                                })
                            }    
                        />
                        <Form.Control  
                            id ="Portada"  
                            placeholder ="Imagen de portada" 
                            type="text" 
                            className="mb-1"
                            value= {trailersEstado?.Portada}
                            onChange = {(e) => 
                                setTrailersEstado({
                                    ...trailerEditar,
                                    Portada: e.target.value,
                                })
                            }    
                        />
                    </Stack>
                </Form>    
                
            </Modal.Body>   
            <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick = {() =>{
                        setIsModalEditar(false);
                        setTrailerEditar(null);
                    }}
                >
                    Cancelar
                </Button>
                <Button variant = "primary" onClick={editarTrailerModal}>
                    Editar
                </Button>
            </Modal.Footer>  

        </Modal>  
        
    );
}

export default ModalEditar;
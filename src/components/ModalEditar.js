import {Modal, Stack, Form, Button} from "react-bootstrap";
import añadirTrailer from "../functions/AñadirTrailers";


function ModalEditar({isModalEditar, setIsModalEditar, actualizarEstadoTrilers, productoEditar}){
    
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

        actualizarEstadoTrilers();
        setIsModalEditar(false);
    }

    return (
        <Modal show ={isModalEditar} onHide = {() => setIsModalEditar
        (false)}>

            <Modal.Header>
                <Modal.Title>Esitar Trailer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <Form.Control  id ="Titulo"  placeholder ="Titulo" type = "text" className="mb-1"/>
                        <Form.Control  id ="Clasificacion"  placeholder ="Clasificacion" type = "text" className="mb-1"/>
                        <Form.Control  id ="Duracion"  placeholder ="Duracion" type="text" className="mb-1"/>
                        <Form.Control  id ="Año"  placeholder ="Año" type="text" className="mb-1"/>
                        <Form.Control  id ="Reseña"  placeholder ="Reseña" type ="text" className="mb-1"/>
                        <Form.Control  id ="Trailer"  placeholder ="Link del trailer" type="text" className="mb-1"/>
                        <Form.Control  id ="Portada"  placeholder ="Imagen de portada" type="text" className="mb-1"/>
                    </Stack>
                </Form>    
                
            </Modal.Body>   
            <Modal.Footer>
                <Button variant="secondary" onClick = {() =>
                setIsModalEditar(false)}>
                    Cancelar
                </Button>
                <Button variant = "primary" onClick={editarTrailerModal}> Editar</Button>
            </Modal.Footer>  

        </Modal>  
        
    );
}

export default ModalEditar;
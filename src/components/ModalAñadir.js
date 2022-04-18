import {Modal, Stack, Form, Button} from "react-bootstrap";
import añadirTrailer from "../functions/AñadirTrailers";


function ModalAñadir({isModalAñadir, setIsModalAñadir, actualizarEstadoTrilers}){
    
    function añadirTrailerModal(){
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
        setIsModalAñadir(false);
    }

    return (
        <Modal show ={isModalAñadir} onHide = {() => setIsModalAñadir
        (false)}>

            <Modal.Header>
                <Modal.Title>Añadir Trailer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <Form.Control  id ="Titulo"  placeholder ="Titulo" type = "text" className="mb-1"/>
                        <Form.Control  id ="Clasificacion"  placeholder ="Clasificacion" type = "text" className="mb-1"/>
                        <Form.Control  id ="Duracion"  placeholder ="Genero" type="text" className="mb-1"/>
                        <Form.Control  id ="Año"  placeholder ="Año" type="text" className="mb-1"/>
                        <Form.Control  id ="Reseña"  placeholder ="Reseña" type ="text" className="mb-1"/>
                        <Form.Control  id ="Trailer"  placeholder ="Link del trailer" type="text" className="mb-1"/>
                        <Form.Control  id ="Portada"  placeholder ="Actor principal" type="text" className="mb-1"/>
                    </Stack>
                </Form>    
                
            </Modal.Body>   
            <Modal.Footer>
                <Button variant="secondary" onClick = {() =>
                setIsModalAñadir(false)}>
                    Cancelar
                </Button>
                <Button variant = "primary" onClick={añadirTrailerModal}> Añadir</Button>
            </Modal.Footer>  

        </Modal>  
        
    );
}

export default ModalAñadir;
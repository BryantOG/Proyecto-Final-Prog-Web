import React from "react";
import "../styles/movies.css";
import Navbar from "../views/Navbar";
import getAllTrailers from "../functions/getAllTrailer";
import { Carousel, Card, Button, Modal, Accordion } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";






const Movies = () => {
  const [Trailers, setTrailers] = React.useState([]);
  function actualizarEstadoTrilers() {
    getAllTrailers().then((Trailers) => {
      setTrailers(Trailers);
    });
  }
  React.useEffect(() => {
    actualizarEstadoTrilers();

  }, [])

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className="principal">

      <Navbar />
      <div className="main-info">

        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.colombia.com/sdi/2022/01/26/the-batman-nuevo-poster-oficial-dc-comics-warner-bros-robert-pattinson-990514.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h4>The Batman</h4>
              <p>En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además,
                entrará en conflicto con un asesino en serie conocido como "el Acertijo".</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.blogs.es/c148a3/uncharted-cartel/840_560.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h4>Uncharted</h4>
              <p>El cazador de tesoros Victor Sullivan recluta a Nathan Drake para que lo ayude a recuperar una fortuna de 500 años de antigüedad. Lo que comienza como un
                atraco se convierte en una competencia contra el despiadado Santiago Moncada.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/doctor-strange-2-poster-social-featured.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4>Dr. Strange 2</h4>
              <p>El Dr. Stephen Strange abre un portal al multiverso al utilizar
                un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme..</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="title">
          Todos los trailers del mundo
        </div>

        <div className="columnas">
          {Trailers.map((Trailer) => (
            <div>
              <Card className="Card" style={{ width: '20rem', }} >
                <Card.Body className="bodyCard">
                  <iframe
                    width={290}
                    height={200}
                    src={Trailer.Trailer}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"></iframe>
                  <Card.Title>{Trailer.Titulo}</Card.Title>
                  <Card.Text>
                    <Accordion data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Detalles</Accordion.Header>
                        <Accordion.Body>
                        <ul >
                            <li><b>Titulo:</b>  {Trailer.Titulo}</li>
                            <li><b>Actores Principales:</b> {Trailer.Portada}</li>
                            <li><b>Clasificacion:</b> {Trailer.Clasificacion}</li>
                            <li><b>Duracion:</b> {Trailer.Duracion}</li>
                            <li><b>Genero:</b> {Trailer.Genero}</li>
                            <li><b>Año:</b> {Trailer.Año}</li>
                            <li><b>Sipnosis:</b> {Trailer.Reseña}</li>
                          </ul>

                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
    
                  </Card.Text>

                </Card.Body>

              </Card>
            </div>
          ))}
        </div>

      </div>
      <footer>
       <h5>Copyright © 2022 Trailers Movie App. Todos Los Derechos Son Reservados.</h5>
      </footer>
    </div>


  );
}

export default Movies;
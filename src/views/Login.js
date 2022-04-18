import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import firebaseApp from "../firebase/credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css"

const auth = getAuth(firebaseApp);


function Login() {

    const navigateTo = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        const correo = document.getElementById("formCorreo").value;
        const contraseña = e.target.formContraseña.value;
        await signInWithEmailAndPassword(auth, correo, contraseña)
            .then(() => navigateTo('/trailers'))
            .catch(() => alert("Contraseña incorrecta"));

    }


    return (
        <Container className="container">
            <h3 className="shadow-sm text-white mt-2 p-3 text-center rounded">Admin Login</h3>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId="formCorreo">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su correo" />
                        </Form.Group>

                        <Form.Group controlId="formContraseña">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Button variant="primary btn-block" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
            <h6 className="mt-5 p-5 text-center      ">Copyright © 2022 Trailers Movie App. Todos Los Derechos Son Reservados.</h6>
        </Container>
    )
}
export default Login;
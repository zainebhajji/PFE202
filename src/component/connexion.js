import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './image/logo.svg';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';




export default class login extends React.Component {

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: '20px', marginBottom: '20px' }}>
                <h1 >Connexion</h1>
                <div style={{ display: 'inline-flex', width: '100%' }}>

                </div>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

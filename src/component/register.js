import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";



export default class Register extends React.Component {

    rgisterSubmitHundler = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div >

                <div style={{ textAlign: "center", marginTop: '20px', marginBottom: '20px' }}>
                    <h1 >Register</h1>
                    <div style={{ display: 'inline-flex', width: '100%' }}>

                    </div>
                </div>

                <Container>
                    <Row>

                        <Col >
                            <CSSTransition in={true} appear={true} timeout={2000} classNames="slide">

                                <Form onSubmit={this.rgisterSubmitHundler}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select" value="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                 </Button>
                                </Form>
                            </CSSTransition>

                        </Col>

                    </Row>

                </Container>
            </div>
        )
    }
}

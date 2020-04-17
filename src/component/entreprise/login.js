import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import { CSSTransition } from 'react-transition-group'

import { Form, Button, Col, Container, Row } from 'react-bootstrap';



export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            
            email: '',
            mdp: ''
            

        };
    }




    onChange(event) {
        if (event.target.id === "formBasicEmail") {
            this.setState({
               email: event.target.value,

            });
        }else{
            this.setState({
                mdp: event.target.value,

            });

        }
        console.log(event.target.id)
    }

    loginSubmitHundler = async event => {
        event.preventDefault();
        
        console.log(this.state.email)
        console.log(this.state.mdp)
        try{
        let response = await fetch('http://localhost:5000/api/user/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.mdp
            })
        });
        let responsedata = await response.json();

        console.log(responsedata)
    }
    catch(err){
        console.log(err);

    }
      



    }
    render() {
        return (
            <div >
                <Container >
                    <Row className="justify-content-md-center">
                        <Col >

                        </Col>
                        <Col xs={6}>
                            <CSSTransition in={true} appear={true} exit={true} timeout={2000} classNames="slide">


                                <Form onSubmit={this.loginSubmitHundler}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={this.state.email}
                                            onInput={this.onChange.bind(this)}
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={this.state.mdp}
                                            onInput={this.onChange.bind(this)}

                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="dark" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </CSSTransition>
                        </Col>
                        <Col>

                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

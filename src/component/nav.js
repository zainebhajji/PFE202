import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modellogin from './modellogin'
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Navmenu extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Acceuil</Nav.Link>
                    <Nav.Link href="offre">Offre d'emploi</Nav.Link>
                    <Nav.Link href="entreprise">Entreprise</Nav.Link>
                    
                
                    
                </Nav>
                
                <Form inline>
                  
                    <Modellogin></Modellogin>
                </Form>
            </Navbar>
        )
    }
}
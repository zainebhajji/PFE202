import React, { useContext } from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Dropdown,
    DropdownButton,
    ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modellogin from "./modellogin";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Authcontext } from "./context/auth-context";

export default function Navmenu() {
    const auth = useContext(Authcontext);

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">

                <Link to="/">Acceuil</Link>

                <Link to="offre">Offre d'emploi</Link>
                <Link to="entreprise">Entreprise</Link>

            </Nav>

            {auth.isLoggedIn && (
                <DropdownButton
                    as={ButtonGroup}
                    title="Dropdown"
                    id="bg-nested-dropdown"
                >
                    <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                    <Dropdown.Item eventKey="2">log out</Dropdown.Item>
                </DropdownButton>
            )}

            {!auth.isLoggedIn && (
                <Form inline>
                    <Modellogin></Modellogin>
                </Form>
            )}

            {!auth.isLoggedIn && (
                <Nav.Link href="entrepriselogin">Je suis une entreprise</Nav.Link>
            )}
        </Navbar>
    );
}

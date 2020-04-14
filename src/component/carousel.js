import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import SarraIMG from './image/carousel1.jpg'
import danielIMG from './image/carousel2.jpg'


export default class Carouselhome extends React.Component {

    render() {
        return (


            <div>


                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SarraIMG}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Trouvez le Job de vos rêves !</h3>
                            <p>Chercher des offres d'emploi par Secteurs</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={danielIMG}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Trouvez le Job de vos rêves !</h3>
                            <p>Chercher des offres d'emploi par Secteurs</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>





        )
    }
}

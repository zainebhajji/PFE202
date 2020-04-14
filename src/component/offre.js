import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './experience'
import Formation from './formation'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Pricing extends React.Component {

  constructor() {
    super();
    this.state = {
      formations: [<Formation></Formation>],
      items: [<Experience></Experience>]
    };
  }



  addexperience() {

    this.setState({

      items: [...this.state.items, { item: <Experience></Experience> }]
    });
  }
  addformation() {

    this.setState({

      formations: [...this.state.formations, { item: <Formation></Formation> }]
    });
  }



  renderexperience() {

    return this.state.items.map((item, index) => {
      return (
        <div key={index}>
          {item.item}

        </div>
      );
    });
  }
  renderformation() {

    return this.state.formations.map((item, index) => {
      return (
        <div key={index}>
          {item.item}
          
         
          
        </div>
      );
    });
  }

  deleteexperience(item) {
    // no event 
    // pass the item to indexOf
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
        items: array
    });
}

deleteformation(formation) {
  // no event 
  // pass the item to indexOf
  const array = this.state.formations;
  const index = array.indexOf(formation);
  array.splice(index, 1);
  this.setState({
      formations: array
  });
}



  render() {
    return (
      <div>


        <h1>entreprise</h1>
        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={8}>

              <Form>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Titre du poste désiré</Form.Label>
                  <Form.Control placeholder="Titre du poste désiré" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Type d'emploi désiré </Form.Label>
                    <Form.Control type="text" placeholder="Type d'emploi désiré" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Catégories</Form.Label>
                    <Form.Control type="text" placeholder="Catégories" />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Objectifs</Form.Label>
                  <Form.Control as="textarea" rows="6" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Compétences</Form.Label>
                  <Form.Control as="textarea" rows="6" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Langues</Form.Label>
                  <Form.Control as="textarea" rows="6" />
                </Form.Group>

                

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Addresse</Form.Label>
                  <Form.Control placeholder="Addresse" />
                </Form.Group>

                <Form.Row>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Code postal</Form.Label>
                    <Form.Control />
                  </Form.Group>





                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridState">
                  <Form.Label>Experience </Form.Label>
                  <Form.Control as="select" value="Choose...">
                    <option>Choose...</option>
                    <option>Débutant</option>
                    <option>0 à 1 an</option>
                    <option>1 à 3 ans</option>
                    <option>3 à 5 ans</option>
                    <option>5 à 10 ans</option>
                    <option>plus 10 ans</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <h1>Experience</h1>
                <Experience></Experience>


                {this.renderexperience()}
                <Button variant="outline-secondary" onClick={this.addexperience.bind(this)}>Ajouter une experience</Button>
                <Button variant="outline-secondary" onClick={this.deleteexperience.bind(this)}>Supprimer une experience</Button>
                <h1>Formation</h1>
                <Formation></Formation>
                {this.renderformation()}
                <Button variant="outline-secondary" onClick={this.addformation.bind(this)}>Ajouter une formation</Button>
                <Button variant="outline-secondary" onClick={this.deleteformation.bind(this)}>Supprimer une formation</Button><br></br>


                <Button variant="primary" type="submit" style={{marginTop:'40px'}}>
                  Submit
               </Button>
              </Form>



            </Col>
            <Col>3 of 3</Col>
          </Row>

        </Container>



      </div>
    )
  }
}

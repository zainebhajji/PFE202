import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Login from './connexion'


export default function Modellogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Mon compte
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mon compte</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Login></Login>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 
import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Login from './connexion';
import Register from './register';


export default function Modellogin() {

  
    const [show, setShow] = useState(false);
    const [content,setContent] = useState(<Login/>);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const login = () => setContent(<Login/>);
    const register = () => setContent(<Register/>);

  
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
          <Button variant="outline-secondary"
                onClick={login}
              >Login</Button>
              <Button variant="outline-secondary"
                onClick={register}
              >Register</Button>
              {content}
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
  
 
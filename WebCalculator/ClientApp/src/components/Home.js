import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { CalculatorRow } from './CalculatorRow';

export function Home() {
  const [show, setShow] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDarkModeToggle(e) {
    setDarkModeEnabled(e.target.checked);
  }

  return (
    <div>
      <Button className='mb-4' variant="primary" onClick={handleShow}>
        Open Calculator
      </Button>
      
      <Form.Group className="mb-3" controlId="darkModeCheckBox">
        <Form.Check type="checkbox" label="Enable dark mode" onChange={handleDarkModeToggle} />
      </Form.Group>

      <Modal show={show} onHide={handleClose} className={darkModeEnabled ? 'dark-mode' : ''}>
        <Modal.Header closeButton>
          <Modal.Title>Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CalculatorRow title="Adding" operator="+" action="Add" />
          <CalculatorRow title="Subtracting" operator="-" action="Subtract" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import './style.css';
import Card from 'react-bootstrap/Card';

const App = () => {
    return (
        <div className='App'>
        
            {/* creation navbar */}
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Projet-React</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    
    </>
    {/* the heading */}

    <h1> React-projet</h1>
    

    {/* parti card */}
    <div className='card'>
    
    <>
    {[
        'Primary',
        'Secondary',
        'Success',
        
    ].map((variant) => (
        <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' } }
        className="mb-2"
        >
        <Card.Header>Header</Card.Header>
        <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    ))}
    </>

    </div>
    
        </div>
    );
};

export default App;


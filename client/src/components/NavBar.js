import React from 'react'
import {Navbar, Form, FormControl, Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar(props) {
    const isLoggedIn = true; 

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Wishlist App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/home">Home</Link>
                <Link to="/my-lists">My Lists</Link>
                <Link to="/my-subscriptions">My Subscriptions</Link>
            </Nav>
            {
                isLoggedIn 
                ? <Button variant="outline-success">Sign In</Button> 
                : <Button variant="outline-danger">Log Out</Button>
            }
            
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

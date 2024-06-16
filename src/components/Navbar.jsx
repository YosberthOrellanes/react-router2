import React from 'react'
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




function Nabvar() {
    return (

        <Navbar bg="danger" data-bs-theme="dark">
            <Container className='navbar'>
                <Navbar.Brand >
                    <p>Poke Web</p>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="navbar">
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/"}> Home </NavLink >
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/Busqueda"}> Busqueda </NavLink >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nabvar
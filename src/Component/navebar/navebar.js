import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./nav.css"

import React  from 'react';
const Navebar = () => {


    return (
        <>
            <Navbar className='nav' variant="dark">
        <Container style={{marginLeft:0}}>
          <Nav className="me-auto">
            <NavLink className="navlik" to={"/movies"}>Home</NavLink>
            <NavLink className="navlik" to={"/fav"}>Favorites</NavLink>
          
          </Nav>
        </Container>
  
      </Navbar>
        </>
    )
}
export default Navebar

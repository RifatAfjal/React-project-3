import React from 'react';
import {Navbar,Nav,Button,Container} from 'react-bootstrap';
import logo from '../../Image/Logo.png';



const Navigation = (props) => { 
    const style = {
        width: "150px",
        height: "60px",
        zIndex: "5000",
        lineHeight: "20px",
        }
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="md" variant="light" fixed="top">
          <Container>
              <Navbar.Brand href="#home"><img src={logo} alt="travel-guru-logo" style={style}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto text-left">
                      <Nav.Link href="/news" className="mr-md-3">News</Nav.Link>
                      <Nav.Link href="/destination" className="mr-md-3">Destination</Nav.Link>
                      <Nav.Link href="/blog" className="mr-md-3">Blog</Nav.Link>
                      <Nav.Link href="/contact" className="mr-md-3">Contact</Nav.Link>
                      <Button variant="warning">Login</Button>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

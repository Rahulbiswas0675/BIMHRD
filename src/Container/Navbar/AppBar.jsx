import './AppBar.scss';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../Assates/Logo/Logo1.png';
import logo2 from '../../Assates/Logo/Logo2.png';
import { navItems } from '../../Datas/NabItems';


function AppBar() {
  const expand = "xl";
  const [scrollVal, setScrollVal] = useState(0);
  const [clsName, setClsName] = useState('nav-fixed');
  const [itemName, setItemName] = useState()
  window.addEventListener("scroll", (event) => {
    setScrollVal(window.scrollY);
  });

  useEffect(() => {
    if (scrollVal <= 200) {
      setClsName("lightBG");
    } else {
      setClsName("darkBG");
    }
  }, [scrollVal]);

  return (
    <Navbar key={expand} expand={expand} className={`"bg-body-tertiary mb-3 navbar ${clsName} `} id='navbar'>
      <Container fluid className="box-container">
        <Navbar.Brand href="/" className='brand'>
          <img src={logo} alt="logo" className='logo' />
          <img src={logo2} alt="logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='menu-btn'/>
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
          <Offcanvas.Header closeButton className='mobile-nav'>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='nav-head-box'>
              <img src={logo} alt="logo" className='logo' />
              <img src={logo2} alt="logo" className='logo' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {
                navItems.map((item) => (
                  <Nav.Link href={item.id} className={`href-item ${itemName === item.name ? "focus" : null}`} key={item.id} onClick={()=> setItemName(item.name)}>{item.name}</Nav.Link>
                ))
              }
            </Nav>
            <a href='#apply' className='apply-btn'>Apply Now</a>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default AppBar;
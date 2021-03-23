import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
        NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import '../styles/navigate.css';

import a from '../images/logo.jpeg';

const Navigate = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='backgroundNavbar' color="light" light expand="md" fixed='top'>

        <div>
          <a href='/'> <img className='logoImg' src={ a }/> </a>  
        </div>
        <NavbarBrand className='styleBrand' href="/"> Playa Maya "Tours" </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse className='alineation' isOpen={isOpen} navbar >
          
          <Nav className="me-auto" navbar >

            <NavItem>
              <NavLink href="/"> Inicio </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/tours"> Tours </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar direction='down' size='lg'>
              <DropdownToggle nav caret> Servicios </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem header> Contamos con: </DropdownItem>
                <DropdownItem> Hospedaje </DropdownItem>
                <DropdownItem> Renta de Yates </DropdownItem>
                <DropdownItem> Transporte </DropdownItem>
                
                <UncontrolledDropdown nav inNavbar direction='right' size='lg'>
                <DropdownToggle nav caret> Eventos </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem header> Selecciona una opcion: </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem> Despedidas de solter@s </DropdownItem>
                  <DropdownItem> Bodas </DropdownItem>
                  <DropdownItem> Aniversarios </DropdownItem>
                  <DropdownItem> Cumpleaños </DropdownItem>           
                </DropdownMenu>
              </UncontrolledDropdown>

              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/nosotros"> Nosotros </NavLink>
            </NavItem>
          </Nav>
          
          <NavbarText style={{ fontWeight: 'bold' }}> Tel: 852 741 9634 </NavbarText>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigate;
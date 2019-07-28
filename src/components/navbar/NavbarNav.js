import React from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

//-----------------------------------------------

const assets= {
  logo: require('../../assets/img/gander-outdoors-logo-dribbble.jpg')
}
export default ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <NavBarStyled>
      {/*====================  header area ====================*/}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={assets.logo} alt=''/></NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/travel">Travel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shope">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem className='user-connect'>
                <NavLink href="/home">login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      {/*====================  End of header area  ====================*/}

    </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
.user-connect > a {
    background-color :#fff!important;
    border: 1px solid #000 !important;
    padding: 12px 30px!important;
}
.user-connect > a:hover {
    background-color :#000!important;
    padding: 12px 30px!important;
    color: #fff!important;
}
.bg-light {
    background-color: #fff !important;
    padding: 20px 30px;
}
.navbar-brand{
    img {
        max-width:40%;
    height:auto;
    }
}

.nav-item {
padding: 0px !important;
      margin-left: 30px;
    & > a {
    color: #000!important;
    font-size: 18px;
    font-weight: 500;
    }
}
`

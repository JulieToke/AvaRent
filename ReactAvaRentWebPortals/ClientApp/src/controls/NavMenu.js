import React, { Component } from 'react';
import { Collapse, Container, DropdownItem, DropdownMenu, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../resources/css/NavMenu.css';
import logoimage from './../resources/images/logoimage.png';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                      <NavbarBrand tag={Link} className="linkText logo" to="/"><img src={logoimage} className="logo"></img></NavbarBrand>
                      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                      <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                          <ul className="navbar-nav flex-grow">
                                                   

                              <NavItem>
                                    <NavLink tag={Link} className="linkText bg btn orange" to="/log-in">Tenant Login</NavLink>
                              </NavItem>
                     
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

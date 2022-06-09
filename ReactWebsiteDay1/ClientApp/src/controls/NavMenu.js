import React, { Component } from 'react';
import { Collapse, Container, DropdownItem, DropdownMenu, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../resources/css/NavMenu.css';
import avaLogo from './../resources/images/avaLogo.png';

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

                        <NavbarBrand tag={Link} className="linkText" to="/"><img src={avaLogo} className="logo"></img></NavbarBrand>


                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">

                                <NavItem class="navLink" >
                                    <NavLink tag={Link} className="linkText" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="linkText" to="/maintenance-request">Create Maintenance Request</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} className="linkText" to="/new-tenant">Sign up to AvaRent</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

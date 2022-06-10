import React, { Fragment, useState } from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';
import avarentLogo from './../resources/images/avarentLogo.jpg';
import { Link } from "react-router-dom";

const LogIn = (props) =>  {
        return (
            <Container>
              <Row>
                    <Col className="text-center">
                        {/*<h1>AvaRent</h1>*/}
                        <img width ="20%" src={avarentLogo} className="img-fluid"></img>
                        <br /><br />
                    </Col>
                </Row>
             
                <Form>
                    <h3 className="text-center">Please Log In to Your Account</h3>           
                    <FormGroup>
                        <Label for="username">User Name:</Label>
                        <Input type="text" name="username" id="username" placeholder="User Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>

                    <Row>
                        <Col className="text-center">
                            <Link className="text-center" href="#">Forgot your password?</Link>                   
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col className="text-center">
                            <Button outline color="primary" className="btn" onClick={() => props.history.push("/maintenance-request")}>Log In</Button> 
                        </Col>
                    </Row>                                              
                </Form>
            </Container>
        );
    }

export default LogIn
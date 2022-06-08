import React, { Fragment } from 'react';
import {
    Container, Jumbotron, Row, Col, Image, Media, Button, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle  } from 'reactstrap';
import './../resources/css/Landing.css';


import avaLogo from './../resources/images/avaLogo.png';
import avarentLogo from './../resources/images/avarentLogo.jpg';

const Landing = (props) => {

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="text-center">
                        {/*<h1>AvaRent</h1>*/}
                        <img src={avarentLogo} className="img-fluid"></img>
                        <br />
                    </Col>
                </Row>
                <Row>
                {/*    <Col lg="4">
                        <img src={avaLogo} className="img-fluid"></img>
                    </Col>*/}
                    <Col lg="6">
                        <Button  outline color="primary" size="m" block class="btn">Button1 Current Tenant?</Button>                       
                    </Col>
                    <Col lg="6">
                        <Button outline color="primary" size="m" block>Button2 Sign up for waiting list?</Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Parkview Living</CardTitle>
                                    <CardSubtitle>Location</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardLink href="#">Learn More</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Community Name</CardTitle>
                                    <CardSubtitle>Location</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.unsplash.com/photo-1504494683949-7319a9ba12d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardLink href="#">Learn More</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Community Name</CardTitle>
                                    <CardSubtitle>Location</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardLink href="#">Learn More</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Community Name</CardTitle>
                                    <CardSubtitle>Location</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardLink href="#">Learn More</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Community Name</CardTitle>
                                    <CardSubtitle>Location</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.pexels.com/photos/280212/pexels-photo-280212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardLink href="#">Learn More</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <footer></footer>
                </Row>

               
         
               

            </Container>
        </Fragment>
    );
};
export default Landing;
import React, { Fragment } from 'react';
import {
    Container, Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';
import './../resources/css/Landing.css';
import AvaRentlogo from './../resources/images/AvaRentlogo.png';
import { Link } from "react-router-dom";

const Landing = (props) => {

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="text-center">                 
                        <img src={AvaRentlogo} width="35%" className="img-fluid"></img>
                        <br />
                    </Col>
                </Row>
                <Row>          
                    {/*<Col lg="6">
                        <Button outline color="primary" size="m" block className="btn" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Button>
                    </Col>
                    <Col lg="6">
                        <Button outline color="primary" size="m" block onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Button>
                    </Col>*/}
                    <Col lg="3">                       
                    </Col>
                    <Col lg="6">   
                        <Button outline width="50%" size="m" block className="btn" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Button>
                    </Col>
                    <Col lg="3">  
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Parkview Living</CardTitle>
                                    <CardSubtitle>1255 Greenhill Road, Parkview</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    {/*<CardLink className="cardLink" href="#" onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</CardLink>*/}
                                    {/*<Link className="linkText" href="#" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Link><br /><br /> */}
                                    <Link className="linkText" href="#" onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Link> 
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Seaview Apartments</CardTitle>
                                    <CardSubtitle>435 The Esplanade, Seaview Downs</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    {/*<Button outline onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Button>*/}
                                    {/*<Link className="linkText" href="#" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Link><br /><br />*/}
                                    <Link className="linkText" href="#" onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Link> 
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Ventura Ridge</CardTitle>
                                    <CardSubtitle>773 Ventura Blvd, Goolwa</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.unsplash.com/photo-1504494683949-7319a9ba12d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    {/*<Button outline onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Button>*/}
                                    {/*<Link className="linkText" href="#" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Link><br /><br />*/}
                                    <Link className="linkText" href="#" onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Link> 
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>The Regal Apartments</CardTitle>
                                    <CardSubtitle>555 The Dress Circle, Henley Beach</CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    {/*<Button outline onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Button>*/}
                                    {/*<Link className="linkText" href="#" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Link><br /><br />*/}
                                    <Link className="linkText" href="#" onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Link> 
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>Ashwood Vista</CardTitle>
                                    <CardSubtitle>1347 Ashwood Avenue, Seacliff </CardSubtitle>
                                </CardBody>
                                <img width="100%" src="https://images.pexels.com/photos/280212/pexels-photo-280212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    {/*<Button outline onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Button>*/}
                                    {/*<Link className="linkText" href="#" onClick={() => props.history.push("/log-in")}>Current Tenant Login</Link><br /><br />*/}
                                    <Link className="linkText" href="#" onClick={() => props.history.push("/new-tenant")}>New Tenancy Enquiries</Link> 
                                </CardBody>
                            </Card>
                        </div>
                    </Col>                
                    <footer></footer>
                </Row>              
            </Container>
        </Fragment>
    );
};
export default Landing;
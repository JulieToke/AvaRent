import React, { Fragment } from 'react';
import { Container, Jumbotron, Row, Col, Image, Media } from 'reactstrap';

import avaLogo from './../resources/images/avaLogo.png';

const Landing = (props) => {

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>AvaRent</h1>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <img src={avaLogo} className="img-fluid"></img>
                    </Col>
                    <Col lg="4">
                        <p>Button 1</p>
                        <p>Button 2</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default Landing;
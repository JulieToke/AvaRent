import React, { Fragment } from 'react';
import {
    Container, Row, Col, Button, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './../resources/css/Landing.css';
import avarentLogo from './../resources/images/avarentLogo.jpg';

const ContactUs = (props) => {
    return (
        <Fragment>
            <Div>
                <h4>AvaRent Adelaide</h4>                
                <p>Level 1</p>
                <p> 4-8, Angas Street</p>
                <p>Kent Town</p>
                <p>South Australia</p>
                <p>Phone: +61 87123 6110</p>
             </Div>
        </Fragment>
    );
};

export default ContactUs;
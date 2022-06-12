import { Fragment } from "react";
import { Form, Button, Input, FormGroup, Label, Col } from 'reactstrap';

const NewTenant = ()  => {
return (
    <Fragment>        
        <Form>
            <h4>Your Details</h4>

            <FormGroup row>
                <Label
                    for="first-name"
                    sm={2}
                >
                    First Name
                </Label>
                <Col sm={10}>
                    <Input
                        id="first-name"
                        name="first-name"
                        placeholder="First Name"
                        type="text"
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="last-name"
                    sm={2}
                >
                    Last Name
                </Label>
                <Col sm={10}>
                    <Input
                        id="last-name"
                        name="first-name"
                        placeholder="Last Name"
                        type="text"
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="address"
                    sm={2}
                >
                    Address
                </Label>
                <Col sm={10}>
                    <Input
                        id="address"
                        name="first-name"
                        placeholder="Address"
                        type="text"
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="exampleEmail"
                    sm={2}
                >
                    Email
                </Label>
                <Col sm={10}>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="dob"
                    sm={2}
                >
                    Date of Birth
                </Label>
                <Col sm={10}>
                    <Input
                        id="dob"
                        name="dob"
                        placeholder="Date of Birth"
                        type="text"
                    />
                </Col>
            </FormGroup>


            <h4>Preferences</h4>

            <FormGroup row>
                <Label
                    for="exampleSelect"
                    sm={2}
                >
                    Bedrooms
                </Label>
                <Col sm={10}>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="exampleSelect"
                    sm={2}
                >
                    Bathrooms
                </Label>
                <Col sm={10}>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="exampleSelect"
                    sm={2}
                >
                    Price Range
                </Label>
                <Col sm={10}>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                            $0-$300/wk
                        </option>
                        <option>
                            $300-$400/wk
                        </option>
                        <option>
                            $400-$500/wk
                        </option>
                        <option>
                            $500-$600/wk
                        </option>
                        <option>
                            $600+/wk
                        </option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="move-in-date"
                    sm={2}
                >
                    Move in Date
                </Label>
                <Col sm={10}>
                    <Input
                        id="move-in-date"
                        name="move-in-date"
                        placeholder="Move in Date"
                        type="text"
                    />
                </Col>
            </FormGroup>
            <Button outline color="primary" className="btn" onClick={event => window.location.href = '/new-tenant-enquiry-success'}>Submit</Button>
        </Form>
    </Fragment>
    );

};
export default NewTenant;
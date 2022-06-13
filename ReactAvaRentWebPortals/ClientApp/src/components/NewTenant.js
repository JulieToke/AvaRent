import { Fragment } from "react";
import { Form, Button, Input, FormGroup, Label, Col } from 'reactstrap';

const NewTenant = ()  => {
return (
    <Fragment>        
        <Form>
            <h1>New Tenant Enquiry</h1>
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
                    for="mobile"
                    sm={2}
                >
                    Mobile
                </Label>
                <Col sm={10}>
                    <Input
                        id="mobile"
                        name="first-name"
                        placeholder="0412 345 678"
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
                    for="date"
                    sm={2}
                >
                    Date Required
                </Label>
                <Col sm={10}>
                    <Input
                        id="date"
                        name="date"
                        placeholder="dd/mm/yyyy"
                        type="date"
                    />
                </Col>
            </FormGroup>


            <h4>Preferences</h4>

            <FormGroup row>
                <Label
                    for="community"
                    sm={2}
                >
                    Community
                </Label>
                <Col sm={10}>
                    <Input
                        id="community"
                        name="select"
                        type="select"
                    >
                        <option>
                            Parkview Living
                        </option>
                        <option>
                            Seaview Apartments
                        </option>
                        <option>
                            Ventura Ridge
                        </option>
                        <option>
                            The Regal Apartments
                        </option>
                        <option>
                            Ashwood Vista
                        </option>
                    </Input>
                </Col>
            </FormGroup>

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
            
            <Button outline color="primary" className="btn" onClick={event => window.location.href = '/new-tenant-enquiry-success'}>Submit</Button>
        </Form>
    </Fragment>
    );

};
export default NewTenant;
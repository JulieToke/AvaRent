import { Fragment, useState } from "react";
import { Form, Button, Input, FormGroup, Label, Col } from 'reactstrap';

const NewTenant = ()  => {

    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(counter+1)
    }

    const multiplyCounter = () => {
        setCounter(counter * 2)
    }

    return <Fragment>

        {/*<div><p>I am a Counter and my Count is {counter}</p></div>*/}
        {/*<div><p><Button color="Danger" onClick={increaseCounter}>Increase Counter by 1</Button></p></div>*/}
        {/*<div><p><button onClick={multiplyCounter}>Multiply Counter by 2</button></p></div>*/}
        
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

            <Button color="light">
                Submit
            </Button>

         </Form>

    </Fragment>

};
export default NewTenant;
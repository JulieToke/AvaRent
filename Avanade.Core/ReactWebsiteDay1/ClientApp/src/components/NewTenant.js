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
                    for="examplePassword"
                    sm={2}
                    >
                    Password
                </Label>
                <Col sm={10}>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
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
                    <option>
                    5
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
                    <option>
                    5
                    </option>
                </Input>
                </Col>
            </FormGroup>

            <Button>
                Submit
            </Button>

         </Form>

    </Fragment>

};
export default NewTenant;
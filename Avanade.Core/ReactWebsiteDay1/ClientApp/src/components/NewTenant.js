import { Fragment, useState } from "react";
import { Form, Button, Input, FormGroup, Label } from 'reactstrap';

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
            <p><Input type="text" placeholder="Name"></Input></p>
            <p><Input type="text" placeholder="Address"></Input></p>
            <h4>Requirements</h4>
            <FormGroup row>
                <Label>Bedrooms</Label>
            <p><Input type="text" placeholder="Bedrooms"></Input></p>
                <Button type="submit" className="success">Submit</Button>
            </FormGroup>

        </Form>

    </Fragment>

};
export default NewTenant;
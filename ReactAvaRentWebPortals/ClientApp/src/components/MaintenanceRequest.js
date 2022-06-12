import { Fragment, useState } from "react";
import { Button, Input, FormGroup, Label, Col } from 'reactstrap';
//import './../resources/css/MaintenanceRequest.css';


const MaintenanceRequest = (props) => {

    //const user = { id: 3, firstName: 'George', lastName: 'Costanza', community: 'ParkView Living', apartment: '5f'};

    const users = [
        { id: 5, firstName: 'Alice', lastName: 'Wonderland', community: 'Seaview Apartments', apartment: '3B' }
        //{ id: 6, firstName: 'Kate', lastName: 'Bush', community: 'Ventura Ridge', apartment: '206' },
        //{ id: 7, firstName: 'Ben', lastName: 'Dover', community: 'The Regal Apartments', apartment: 'PH1' },
        //{ id: 8, firstName: 'Quandale', lastName: 'Dingle', community: 'Ashwood Vista', apartment: '6j' }
    ];
    
    const titleStyle = {
        fontSize: '40px',
        textAlign: 'center'
    }

    const bottomStyle = {
        fontSize: '12px',
        textAlign: 'center'
    }


    //useEffect(() => {
    //    console.log(user);
    //})

    return (
        <Fragment>

            <h1>Maintenance Request</h1>

            {/* }<p style={bottomStyle}>(try pull some dummy data from above array)</p>*/}

            {users.map((pr, i) =>
                <Fragment key={i}>

                    <UserId user={pr}></UserId>
                    {/* } <p style={bottomStyle}>This is number {i} in the loop</p>*/}
                </Fragment>
            )}

        </Fragment>
    );
};


const UserId = (props) => {

    const [user, setUser] = useState(props.user)

    const rowStyle = {
        borderTop: '1px solid #dddddd',
        padding: '20px'
    }

    return (
        <div className="userId" style={rowStyle}>

            <h4 className="greeting" >Hello {user.firstName}, Welcome to our Maintenance Portal</h4>
            {/*<h5>Maintenance Request ID:{user.id}</h5>*/}
            <h6>Tenant: {user.firstName}  {user.lastName}</h6>
            <h6>Community: {user.community}</h6>
            <h6>Apartment: {user.apartment}</h6>

            <FormGroup row>
                <Label
                    for="exampleSelect"
                    sm={2}
                >
                    Category
                </Label>
                <Col sm={10}>
                    <Input id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option className="urgent">
                            Urgent - Health and Safety Issue
                        </option>
                        <option className="prestige">
                            Prestige
                        </option>
                        <option>
                            High
                        </option>
                        <option>
                            Medium
                        </option>
                        <option>
                            Low
                        </option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="exampleSelect"
                    sm={2}
                >
                    Maintenance Type
                </Label>
                <Col sm={10}>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                            Electrical
                        </option>
                        <option>
                            Plumbing
                        </option>
                        <option>
                            Painting/Decorating
                        </option>
                        <option>
                            Other
                        </option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="details"
                    sm={2}
                >
                    Details
                </Label>
                <Col sm={10}>
                    <div className="form-group">

                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            placeholder="Please provide service request details"
                            rows="5"
                        />
                    </div>
                </Col>
                <Button outline color="primary" className="btn" onClick={event => window.location.href = '/maintenance-request-success'}>Submit</Button>
            </FormGroup>
        </div>
    );
};
export default MaintenanceRequest;
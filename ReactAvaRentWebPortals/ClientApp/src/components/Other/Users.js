import React, { Fragment } from 'react';
import { Container, Jumbotron, Row, Col, Image, Media } from 'reactstrap';

import avaLogo from './../resources/images/avaLogo.png';

//const userResults = [{ id: 1, name: 'book', description: 'React Fundamentals', price: 50 }, { id: 2, name: 'laptop', description: 'Dell laptop', price: 2000 }]
const users = (props) => {
    const userList = userResults.map((user) => (
            <tr>
                <td>{user.firstName}</td>
                <td>{user.community}</td>
                <td>{user.apartment}</td>
            </tr >
    ))

    return (
        <Fragment>
            <h2> users </h2>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Community</th>
                    <th>Apartment</th>
                </tr>
                {userList}
            </table>
        </Fragment>
    );
};
export default users;
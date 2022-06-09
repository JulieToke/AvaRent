import React, { Fragment } from 'react';
import { Route } from 'react-router';

import Landing from './components/Landing';
import NewTenant from './components/NewTenant';
import MaintenanceRequest from './components/MaintenanceRequest';


const AppRouting = () => {

    return (
        <Fragment>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/maintenance-request" component={MaintenanceRequest} />
            <Route exact={true} path="/new-tenant" component={NewTenant} />

        </Fragment>
    );
};
export default AppRouting;

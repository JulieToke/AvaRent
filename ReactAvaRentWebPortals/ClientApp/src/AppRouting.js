import React, { Fragment } from 'react';
import { Route } from 'react-router';

import Landing from './components/Landing';
import NewTenant from './components/NewTenant';
import MaintenanceRequest from './components/MaintenanceRequest';
import LogIn from './components/LogInForm';
import MaintenanceRequestSuccess from './components/MaintenanceRequestSuccess';
import NewTenantEnquirySuccess from './components/NewTenantEnquirySuccess';


const AppRouting = () => {

    return (
        <Fragment>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/maintenance-request" component={MaintenanceRequest} />
            <Route exact={true} path="/new-tenant" component={NewTenant} />
            <Route exact={true} path="/log-in" component={LogIn} />
            <Route exact={true} path="/maintenance-request-success" component={MaintenanceRequestSuccess} />
            <Route exact={true} path="/new-tenant-enquiry-success" component={NewTenantEnquirySuccess} />
        </Fragment>
    );
};
export default AppRouting;

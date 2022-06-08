import React, { Fragment } from 'react';
import { Route } from 'react-router';

import Landing from './components/Landing';
import Counter from './components/Counter';
import Hello from './components/Hello';
import ContactUs from './components/Contact';
import ProductList from './components/ProductList';

const AppRouting = () => {

    return (
        <Fragment>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/counter" component={Counter} />
            <Route exact={true} path="/services" component={Hello} />
            <Route exact={true} path="/productlist" component={ProductList} />
            <Route exact={true} path="/contact" component={ContactUs} />
        </Fragment>
    );
};
export default AppRouting;

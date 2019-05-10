import {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
// import {connect} from 'react-redux';

import React from "react";
import Fade from '@material-ui/core/Fade';

import MainHeader from './components/MainHeader/MainHeader'

import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import _404 from './containers/_404';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

class Router extends Component {

    render() {

        return (
            <BrowserRouter history={history}>
                {/* <Fade> */}
                    <Switch>
                        {/* <Route exact path="/" component={Home} /> */}
                        {/* <Route exact path="/" render={({match}) => ( */}
                        <Route exact path="/" render={({match}) => (
                            <Home />
                        )} />
                        <Route exact path="/portfolio" render={({match}) => (
                            <Portfolio />
                        )} />

                        <Route render={({match}) => (
                            // <Redirect to="/404"/>
                            <_404 match={match} history/>

                            // loggedIn ? (
                            //     <Redirect to="/dashboard"/>
                            // ) : (
                            //     <PublicHomePage/>
                            // )
                        )} />
                    </Switch>
                {/* </Fade> */}
            </BrowserRouter>
        )
    }
}

export default Router;

import {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
// import {connect} from 'react-redux';

import React from "react";
import Fade from '@material-ui/core/Fade';

import Home from './containers/Home';
import Forbidden from './containers/Forbidden';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class Router extends Component {

    goTo(path){
        history.push(path)
    }

    render() {

        return (
            <BrowserRouter history={history}>
            <Fade>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    {/* <Route exact path="/" render={({match}) => ( */}
                    <Route exact path="/" render={({match}) => (
                        <Home/>
                    )} />
                        
                    <Route path="/test" render={({match}) => (
                        <div>
                            <div>No Match for route : {JSON.stringify(match)}</div>
                            <div>History.pathname : {history.location.pathname}</div>
                            <div>History : {JSON.stringify(history)}</div>
                        </div>
                    )} />

                    <Route render={({match}) => (
                        <div>
                            <div>No Match for route : {history.location.pathname}</div>
                        </div>
                    )} />
                    <Route path="/forbidden" render={({match}) => (
                        <Forbidden />
                    )} />
                </Switch>
            </Fade>
            </BrowserRouter>
        )
    }
}

export default Router;

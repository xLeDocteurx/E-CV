import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import {AnimatedSwitch} from 'react-router-transition'
import {Transition} from 'react-transition-group';
// import {connect} from 'react-redux'

import React from "react"

// import MainHeader from './components/MainHeader/MainHeader'

import Grid from '@material-ui/core/Grid'

import MainHeader from './components/MainHeaders/MainHeader'

import Home from './containers/Home'
import Portfolio from './containers/Portfolio'
import Project from './containers/Project'
import _404 from './containers/_404'

import {createBrowserHistory} from 'history'
const history = createBrowserHistory()

class Router extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentWillReceiveProps(nextProps) {
        this.previousView = this.props.location
    }

    render() {
        
        return (
            <BrowserRouter history={history}>
                <MainHeader pageTitle={this.state.pageTitle}/>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                {/* <Switch> */}
                    {/* <Route exact path="/" component={Home} /> */}
                    {/* <Route exact path="/" render={({match}) => ( */}
                    <Route exact path="/" render={() => (
                            <Home />
                    )} />
                    <Route path="/portfolio" render={() => (
                            <Portfolio />
                    )} />
                    {/* <Route exact path="/portfolio/:slug" render={() => (
                        <Project match={match}/>
                    )} /> */}

                    <Route render={({match, location}) => (
                        // <Redirect to="/404"/>
                        <_404 match={match} location={location} history/>

                        // loggedIn ? (
                        //     <Redirect to="/dashboard"/>
                        // ) : (
                        //     <PublicHomePage/>
                        // )
                    )} />
                {/* </Switch> */}
                </AnimatedSwitch>
                    
                {/* Switch for modals and/or routes taking a state as parameter */}
                {/* <div style={{...position, border: '2px red solid'}}> */}
                    <Switch>
                        <Route exact path="/portfolio/:slug" render={({match, location}) => {
                            // const modal = location.state && location.state.to === 'modal'

                            return (
                                <Project match={match} location={location} />
                            )
                        }} />
                    </Switch>
                {/* </div> */}
            </BrowserRouter>
        )
    }
}

export default Router

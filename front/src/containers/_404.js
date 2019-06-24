import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {withStyles} from '@material-ui/core'
import { jsenv } from '../env'

import MainHeader from '../components/MainHeaders/MainHeader'
// import MainHeaderProminent from '../components/MainHeaders/MainHeaderProminent'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
}

class _404 extends Component {

    constructor(props){
        super(props)

        this.state = {
            "pageTitle":"404",
        }
    }
    
	componentDidMount() {
        document.title = `${jsenv.REACT_APP_APP_NAME} - ${this.state.pageTitle}`
	}

    render() {

        return (
            <div>
                <MainHeader pageTitle={this.state.pageTitle}/>
                <div>{this.state.pageTitle}</div>
                {this.props.match && <div>match : {JSON.stringify(this.props.match)}</div>}


                
                <div>match.params : {JSON.stringify(this.props.match.params)}</div>
                <div>pathname : {this.props.pathname}</div>
                {/* <div>History.location.pathname : {this.props.history.location.pathname}</div> */}
                <div>History.location : {JSON.stringify(this.props.history.location)}</div>
                <div>History : {JSON.stringify(this.props.history)}</div>
            </div>
        )
    }
}

export default withStyles(styles)(_404)
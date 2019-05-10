import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeader/MainHeader'
import MainHeaderProminent from '../components/MainHeader/MainHeaderProminent'

import {sectionsActions, projectsActions} from '../actions';

// import {projectsApi} from '../api'

const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    bandeau: {
        // minHeight: 300,
        // height: '100%',
    },
    // bigAvatar: {
    //     // margin: 10,
    //     [theme.breakpoints.down('sm')]: {
    //         width: 150,
    //         height: 150,
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         width: 175,
    //         height: 175,
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         width: 200,
    //         height: 200,
    //     },
    // },
})

class Portfolio extends Component {

    constructor(props){
        super(props)

        this.state = {
            "pageTitle":"Portfolio",
        }
    }

    componentDidMount() {
        document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        this.getSections()

        // this.props.dispatch(projectsActions.getAll())
    }

    getSections() {
        this.props.dispatch(sectionsActions.getOne('portfolio_Intro'))
    }

    renderLoading() {
        if(
            this.props.sections.isLoading 
            // ||
            // this.props.projects.isLoading
        ) {
            return <LinearProgress />
        }
    }

    renderBandeau() {
        // if(this.props.sections.error) { return JSON.stringify(this.props.sections.error) }

        if(this.props.sections.isLoading) {
            return 'loading'
        } else if(this.props.sections.sections.portfolio_Intro) {
            const { classes } = this.props
            return (
                <Grid container direction="column" justify="center" alignItems="center" className={classes.bandeau}>
                    <div>{this.props.sections.sections.portfolio_Intro.textContent}</div>
                </Grid>
            )
        } else {
            return 'WTF'
        }
    }

    renderProjects() {
        return null
    }

    render() {

        return (
            <Grid container direction="column" justify="center" alignItems="center" className="mainContainer">
                <MainHeader pageTitle={this.state.pageTitle}/>
                {this.renderLoading()}

                {this.renderBandeau()}
                {this.renderProjects()}
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        sections: state.sections,
        projects: state.model.projects,
        selectedProject: state.selectedProject,
    }
}

const connectedPortfolio = connect(mapStateToProps)(Portfolio)
export default withStyles(styles)(connectedPortfolio)
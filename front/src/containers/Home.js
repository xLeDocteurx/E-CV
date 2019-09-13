// import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import { jsenv } from '../env'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

import grey from '@material-ui/core/colors/grey'

import FaceIcon from '@material-ui/icons/Face'
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeaders/MainHeader'
// import MainHeaderProminent from '../components/MainHeaders/MainHeaderProminent'
import Skills from '../components/Skills/Skills'
import Formation from '../components/Formation/Formation'
import Technos from '../components/Technos.js/Technos'
import Timeline from '../components/Timeline/Timeline'

import {sessionActions, sectionsActions, skillsActions, educationActions, experiencesActions, technosActions} from '../actions'
import Bandeau from '../components/Bandeau/Bandeau';

// import {skillsApi} from '../api'

const styles = theme => ({
    root: {
        flexGrow: 1,
        // width: '100%',
        // width: '100vw',
        // paddingLeft: '5vw',
        // paddingRight: '5vw',
        // maxWidth: 360,
        // backgroundColor: grey[100],
        // height: '100%',


        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '10vw',
            paddingRight: '10vw',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '15vw',
            paddingRight: '15vw',
        },
    },
    grow: {
        flexGrow: 1,
    },
    w100: {
        width: '100%',
    },
    menuButton: {
        marginRight: 20,
    },
})

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            pageTitle:"Home",
            fade: true,
        }
    }
    
	componentDidMount() {
        this.props.dispatch(sessionActions.setPageTitle(this.state.pageTitle))
        // this.props.dispatch(sessionActions.setPageTitle(this.state.pageTitle))
        document.title = `${jsenv.REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        this.getSections()
        
        if(!this.props.education.education) {
            this.props.dispatch(educationActions.getAll(() => this.getAllCallback()))
        }
        if(!this.props.skills.skills) {
            this.props.dispatch(skillsActions.getAll(() => this.getAllCallback()))
        }
        if(!this.props.technos.technos) {
            this.props.dispatch(technosActions.getAll(() => this.getAllCallback()))
        }
        if(!this.props.experiences.experiences) {
            this.props.dispatch(experiencesActions.getAll(() => this.getAllCallback()))
        }
    }
    
    componentWillUnmount() {
        this.setState({fade: false})
    }

    getSections() {
        // this.props.dispatch(sectionsActions.getOne('citation'))
    }

    sortByCreatedAt(array) {
        return array.sort((a, b) => {
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }

    render() {

        return (
            <Grid container
            // spacing={3}

            direction="column"
            justify="center"
            alignItems="stretch"
            // direction="column"
            // justify="center"
            // alignItems="center"
            
            // alignItems="stretch"

            className={this.props.classes.root}
            >
                {/* {this.renderLoading()} */}

                {/* <Bandeau /> */}
                
                {/* <Formation education={this.props.education} /> */}

                {/* <Skills skills={this.props.skills} /> */}

                <Technos technos={this.props.technos} />

                <Timeline experiences={this.props.experiences} />

            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        sections: state.sections,
        skills: state.model.skills,
        selectedSkill: state.selectedSkill,
        education: state.model.education,
        experiences: state.model.experiences,
        technos: state.model.technos,
    }
}

const connectedHome = connect(mapStateToProps)(Home)
export default withStyles(styles)(connectedHome)
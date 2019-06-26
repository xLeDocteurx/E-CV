// import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import { jsenv } from '../env'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
import Formation from '../components/Formation/Formation';
import Technos from '../components/Technos.js/Technos'
import Timeline from '../components/Timeline/Timeline'

import {sessionActions, sectionsActions, skillsActions, educationActions, experiencesActions, technosActions} from '../actions'

// import {skillsApi} from '../api'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: grey[100],
        // flexGrow: 1,
        // height: '100%',
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
    bandeau: {
        paddingTop: '5vw',
        paddingBottom: '5vw',
        // width: '100vw',
        // textAlign: 'center',
    },
    bigAvatar: {
        // marginTop: '10vw',
        // marginBottom: '10vw',
        
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '50vw',
            height: '50vw',
        },
        [theme.breakpoints.up('sm')]: {
            width: '25vw',
            height: '25vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '25vw',
            height: '25vw',
        },
    },
    citation: {
        marginTop: '2.5vw',
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
        document.title = `${jsenv.REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        this.getSections()
        
        this.props.dispatch(skillsActions.getAll())
        this.props.dispatch(educationActions.getAll())
        this.props.dispatch(technosActions.getAll())
        this.props.dispatch(experiencesActions.getAll())
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

    renderBandeau() {
        if(this.props.sections.error) { return JSON.stringify(this.props.sections.error) }

        return (
            <Grid item xs={12} /*direction="column" justify="center" alignItems="center"*/ className={this.props.classes.bandeau}>
                {/* <div> */}
                    <Avatar alt="Photo" src="./img/avatar.jpg" className={this.props.classes.bigAvatar} title="Ma photo" />
                    <Typography /*variant="h3" component="h1"*/ align="center" className={this.props.classes.citation}>
                        "Il ne faut jamais baisser les bras. sauf si c'est dans la chorégraphie!"<br/>
                        - Moi
                    </Typography>
                {/* </div> */}
            </Grid>
        )


    }

    renderSkills() {
        if(this.props.skills.error) { return JSON.stringify(this.props.skills.error) }

        /*if(this.props.skills.isLoading) {
            return (
                <Grid container direction="column" justify="center" alignItems="center" className={this.props.classes.bandeau}>
                    <CircularProgress />
                </Grid>
            )
        } else */if(this.props.skills.skills) {
            return (
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" align="center">
                        Compétences
                    </Typography>
                    {/* JSON.stringify(this.props.skills.skills) */}
                    {this.props.skills.skills.map((skill, skill_index) => (
                        <div key={skill_index}>
                            {skill.name}
                            <p>
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </Grid>
            )
        } else {
            return 'WTF'
        }
    }

    render() {

        return (
            <Grid container /*direction="column" justify="center" alignItems="center"*/ /*className={this.props.classes.root}*/>
                {/* {this.renderLoading()} */}

                {this.renderBandeau()}

                <Formation education={this.props.education} />

                {this.renderSkills()}

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
import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeaders/MainHeader'
// import MainHeaderProminent from '../components/MainHeaders/MainHeaderProminent'

import {sessionActions, sectionsActions, skillsActions} from '../actions'

// import {skillsApi} from '../api'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
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
        // minHeight: 300,
        // height: '100%',
    },
    bigAvatar: {
        // margin: 10,
        [theme.breakpoints.down('sm')]: {
            width: 150,
            height: 150,
        },
        [theme.breakpoints.up('md')]: {
            width: 175,
            height: 175,
        },
        [theme.breakpoints.up('lg')]: {
            width: 200,
            height: 200,
        },
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
        document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        this.getSections()
        
        this.props.dispatch(skillsActions.getAll())

    }
    
    componentWillUnmount() {
        this.setState({fade: false})
    }

    renderLoading() {
        if(
            this.props.sections.isLoading ||
            this.props.skills.isLoading ||
            this.props.selectedSkill.isLoading
        ) {
            return <LinearProgress className={this.props.classes.w100} />
        }
    }

    getSections() {
        // this.props.dispatch(sectionsActions.getOne('citation'))
    }

    renderBandeau() {
        if(this.props.sections.error) { return JSON.stringify(this.props.sections.error) }

        return (
            <Grid container direction="column" justify="center" alignItems="center" className={this.props.classes.bandeau}>
                <Avatar alt="Photo" src="./img/avatar.jpg" className={this.props.classes.bigAvatar} title="Ma photo" />
                <div>
                    "Il ne faut jamais baisser les bras. sauf si c'est dans la chorégraphie!"<br/>
                    - Moi
                </div>
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
                // JSON.stringify(this.props.skills.skills)
                this.props.skills.skills.map((skill, skill_index) => (
                    <div key={skill_index}>
                        {skill.name}
                        <p>
                            {skill.description}
                        </p>
                    </div>
                ))
            )
        } else {
            return 'WTF'
        }
    }

    render() {

        return (
            <Grid container direction="column" /*justify="center"*/ /*alignItems="center"*/>
                {this.renderLoading()}

                <h1>Bandeau :</h1>
                {this.renderBandeau()}
                <h1>Compétences :</h1>
                {this.renderSkills()}
                <h1>Technologies :</h1>
                
                <h1>Expérience :</h1>

            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        sections: state.sections,
        skills: state.model.skills,
        selectedSkill: state.selectedSkill,
    }
}

const connectedHome = connect(mapStateToProps)(Home)
export default withStyles(styles)(connectedHome)
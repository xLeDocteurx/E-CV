import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeaders/MainHeader'
// import MainHeaderProminent from '../components/MainHeaders/MainHeaderProminent'

import {sessionActions, sectionsActions, skillsActions, experiencesActions, technosActions} from '../actions'

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
        marginTop: 10,
        marginLeft: 10,
        textAlign: 'center',
    },
    bigAvatar: {
        // margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        this.props.dispatch(technosActions.getAll())
        this.props.dispatch(experiencesActions.getAll())
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

    sortByCreatedAt(array) {
        return array.sort((a, b) => {
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }

    sortByFirstYear(array) {
        return array.sort((a, b) => {
            a = new Date(a.firstYear)
            b = new Date(b.firstYear)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }

    renderBandeau() {
        if(this.props.sections.error) { return JSON.stringify(this.props.sections.error) }

        return (
            <Grid item xs={12} /*direction="column" justify="center" alignItems="center"*/ className={this.props.classes.bandeau}>
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
                <Grid item xs={12}>
                    <h1>Compétences</h1>
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

    renderTechnos() {
        if(this.props.technos.error) { return JSON.stringify(this.props.technos.error) }

        /*if(this.props.technos.isLoading) {
            return (
                <Grid container direction="column" justify="center" alignItems="center" className={this.props.classes.bandeau}>
                    <CircularProgress />
                </Grid>
            )
        } else */if(this.props.technos.technos) {
            return (
                <Grid item xs={12}>
                    <h1>Technologies</h1>
                    {this.props.technos.technos.map((techno, techno_index) => (
                        <span key={techno_index}>
                            {techno.name}
                            {/* <p>
                                {techno.description}
                            </p> */}
                        </span>
                    ))}
                </Grid>
            )
        } else {
            return 'WTF'
        }
    }

    renderExperiences() {
        
        if(this.props.experiences.error) { return JSON.stringify(this.props.experiences.error) }

        /*if(this.props.experiences.isLoading) {
            return (
                <Grid container direction="column" justify="center" alignItems="center" className={this.props.classes.bandeau}>
                    <CircularProgress />
                </Grid>
            )
        } else */if(this.props.experiences.experiences) {
            return (
                <Grid item xs={12}>
                    <h1>Expériences</h1>
                    <div className="timeline">
                        <ul>
                            {this.sortByFirstYear(this.props.experiences.experiences).map((experience, experience_index) => {
                                const {color, name, title, description, firstYear, lastYear} = experience
                                return (
                                    <li key={experience_index}>
                                        <div className={`bullet contour_${color}`}></div>
                                        {/* <div className="time">5pm</div> */}
                                        <div className="time">{lastYear ? `${firstYear} - ${lastYear}` : firstYear}</div>
                                        <div className="desc">
                                            <h3>{name}</h3>
                                            <h4>{title}</h4>
                                            <div className="people">
                                                {description}
                                                {/* Pour les badges de technos ? */}
                                                {/* <img src="https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg" alt="" />
                                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" alt="" />
                                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg" alt="" /> */}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Grid>
            )
        } else {
            return 'WTF'
        }

    }

    render() {

        return (
            <Grid container /*direction="column" justify="center" alignItems="center"*/>
                {this.renderLoading()}

                {this.renderBandeau()}

                {this.renderSkills()}
                {this.renderTechnos()}
                {this.renderExperiences()}

            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        sections: state.sections,
        skills: state.model.skills,
        selectedSkill: state.selectedSkill,
        experiences: state.model.experiences,
        technos: state.model.technos,
    }
}

const connectedHome = connect(mapStateToProps)(Home)
export default withStyles(styles)(connectedHome)
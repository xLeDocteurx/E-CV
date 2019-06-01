import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import Divider from '@material-ui/core/Divider'
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeader/MainHeader'
// import MainHeaderProminent from '../components/MainHeader/MainHeaderProminent'

import {sectionsActions, projectsActions} from '../actions'

// import {projectsApi} from '../api'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        // flexGrow: 1,
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

class Template extends Component {

    constructor(props){
        super(props)

        this.state = {
            pageTitle:"Template",
            fade: false,
            fadeDirection: "right",
        }
    }

    componentDidMount() {
        document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        this.getSections()

        this.props.dispatch(projectsActions.getAll())
        
        this.setState({fade: !this.state.fade})
    }

    renderLoading() {
        if(
            this.props.sections.isLoading ||
            this.props.projects.isLoading
        ) {
            return <LinearProgress />
        }
    }

    getSections() {
        this.props.dispatch(sectionsActions.getOne('avatar'))
    }

    renderBandeau() {
        // if(this.props.sections.error) { return JSON.stringify(this.props.sections.error) }

        if(this.props.sections.isLoading) {
            return 'loading'
        } else if(this.props.sections.sections.avatar) {
            // const { classes } = this.props
            return (
                <div>{this.props.sections.sections.avatar.textContent}</div>
                // <Grid container direction="column" justify="center" alignItems="center" className={classes.bandeau}>
                //     <Paper /*className={classes.root}*/ /*elevation={1}*/>
                //         <Typography variant="h5" component="h3">
                //             Template
                //         </Typography>
                //         <Typography component="p">
                //             {this.props.sections.sections.avatar.textContent}
                //         </Typography>
                //     </Paper>
                // </Grid>
            )
        } else {
            return 'WTF'
        }
    }

    renderProjects() {
        if(this.props.projects.error) { return JSON.stringify(this.props.projects.error) }

        if(this.props.projects.isLoading) {
            return 'loading'
        } else if(this.props.projects.projects && this.props.sections.sections.avatar) {
            const { classes } = this.props
            return (
                <List /*component="nav"*/>
                    {this.props.projects.projects.map((project, project_index) => {
                        return (
                            // <div>
                            //     {project.title}
                            //     <br/>
                            //     {project.name}
                            //     <p>{project.description}</p>
                            // </div>
                            <ListItem button key={project_index}>
                                <ListItemIcon>
                                <Avatar alt={this.props.sections.sections.avatar.name} src={this.props.sections.sections.avatar.textContent} className={classes.bigAvatar} title={this.props.sections.sections.avatar.name} />
                                {/* <InboxIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary={project.title} />
                            </ListItem>
                        )
                    })}
                </List>
            )
        } else {
            return 'WTF'
        }
    }

    render() {

        return (
            <Grid container direction="column" justify="center" alignItems="center" className="mainContainer">
                {this.renderLoading()}
                <MainHeader pageTitle={this.state.pageTitle}/>
    
                <Fade direction={this.state.fadeDirection} in={this.state.fade} mountOnEnter unmountOnExit>
                    <div>
                        {this.renderBandeau()}
                        {this.renderProjects()}
                    </div>
                </Fade>
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

const connectedTemplate = connect(mapStateToProps)(Template)
export default withStyles(styles)(connectedTemplate)
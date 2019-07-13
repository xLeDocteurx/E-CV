import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'

// import {Link} from 'react-router-dom'

// import M from "materialize-css"
// import {AccessAlarm, ThreeDRotation} from '@material-ui/icons'

import HideOnScroll from '../../utils/HideOnScroll'

import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'

import LinearProgress from '@material-ui/core/LinearProgress'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
// import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    invisible: {
        visibility: 'hidden',
    },
    menuButton: {
        // marginLeft: -12,
        marginRight: 20,
    },
}

class MainHeader extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }

        this.redirectTo = this.redirectTo.bind(this)
    }

    componentDidMount() {
        document.body.requestFullscreen()
    }

    redirectTo(path) {
        this.props.history.push(`${path}`)
    }
                                
    renderLoading() {
        if(
            this.props.sections.isLoading ||
            this.props.projects.isLoading ||
            this.props.selectedProject.isLoading ||
            this.props.skills.isLoading ||
            this.props.selectedSkill.isLoading ||
            this.props.education.isLoading ||
            this.props.technos.isLoading ||
            this.props.experiences.isLoading
        ) {
            return <LinearProgress className={this.props.classes.w100} />
        }
        return null
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                {/* {this.renderLoading()} */}
                <AppBar position="static" className={this.props.classes.invisible}>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
                <HideOnScroll {...this.props}>
                    <AppBar /*position="sticky"*/ /*color="default"*/>
                        <Toolbar>
                            <IconButton disabled={true} color="inherit" aria-label="Menu" title="Menu">
                                {/* <Avatar alt="Logo" src="./favicon.png" /> */}
                            </IconButton>
                            {/* <AccessAlarm /> */}
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                {this.props.session.pageTitle ? this.props.session.pageTitle : ""}
                            </Typography>
                            {/* <Button color="inherit">Login</Button> */}

                            <Button className={classes.menuButton} color="inherit" onClick={() => this.redirectTo('/')} title="Home">Home</Button>
                            <Button className={classes.menuButton} color="inherit" onClick={() => this.redirectTo('/portfolio')} title="Portfolio">Portfolio</Button>
                            {/* <Button className={classes.menuButton} color="inherit" onClick={() => this.redirectTo('/contact')} title="Contact">Contact</Button> */}
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        session: state.session,
        sections: state.model.sections,
        projects: state.model.projects,
        selectedProject: state.selectedProject,
        skills: state.model.skills,
        selectedSkill: state.selectedSkill,
        education: state.model.education,
        technos: state.model.technos,
        experiences: state.model.experiences
    }
}

const connectedMainHeader = connect(mapStateToProps)(MainHeader)
const MainHeaderWithStyle = withStyles(styles)(connectedMainHeader)
export default withRouter(MainHeaderWithStyle)
import React, {Component, Fragment} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'

// import {Link} from 'react-router-dom'

// import M from "materialize-css"
// import {AccessAlarm, ThreeDRotation} from '@material-ui/icons'

import HideOnScroll from '../../utils/HideOnScroll'

import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
// import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        // flexGrow: 1,
        // zIndex: 1400,
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

class ProjectHeader extends Component {

    constructor(props){
        super(props)
        this.state = {
            // animDuration: 3000,
            animDuration: 450,
            fadeIn: true,
        }

        this.redirectTo = this.redirectTo.bind(this)
    }

    componentDidMount() {

    }

    redirectTo(path) {

        this.setState({fadeIn: false})
        // setTimeout(() => this.props.history.push(`${path}`) , this.state.animDuration)
        this.props.history.push(`${path}`)
    }

    goBack(callabck) {
        callabck()
        // setTimeout(this.props.history.goBack(), this.state.animDuration)
        this.props.history.goBack()
    }

    render() {
        const { classes } = this.props
        const visibility = this.props.animState == "entered" ? null : {visibility: 'hidden'}

        return (
            <Fragment>
                <Fade in={this.state.fadeIn} timeout={this.state.animDuration} mountOnEnter unmountOnExit>
                    {/* <HideOnScroll {...this.props}> */}
                        <AppBar position="fixed" color="default" /*style={{...classes.root, ...vizsibility}}*/>
                            <Toolbar>
                                <IconButton onClick={() => this.redirectTo('/portfolio')} className={classes.menuButton} color="inherit" aria-label="Menu" title="Menu">
                                    <NavigateBefore />
                                </IconButton>
                                {/* <AccessAlarm /> */}
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    {this.props.pageTitle ? this.props.pageTitle : ""}
                                </Typography>
                                {/* <Button color="inherit">Login</Button> */}
            
                                {/* <Button className={classes.menuButton} color="inherit" onClick={() => this.redirectTo('/')} title="Home">Home</Button> */}
                                {/* <Button className={classes.menuButton} color="inherit" onClick={() => this.redirectTo('/portfolio')} title="Portfolio">Portfolio</Button> */}
                                {/* <Button className={classes.menuButton} color="inherit" onClick={() => this.redirectTo('/contact')} title="Contact">Contact</Button> */}
                            </Toolbar>
                        </AppBar>
                    {/* </HideOnScroll> */}
                </Fade>
                <AppBar position="static" className={this.props.classes.invisible}>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </Fragment>
        )
    }
}

export const ProjectHeaderWithStyle = withStyles(styles)(ProjectHeader)
export default withRouter(ProjectHeaderWithStyle)
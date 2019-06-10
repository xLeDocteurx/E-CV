import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'

// import {Link} from 'react-router-dom'

// import M from "materialize-css"
// import {AccessAlarm, ThreeDRotation} from '@material-ui/icons'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Paper from '@material-ui/core/Paper'
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

    }

    redirectTo(path) {
        this.props.history.push(`${path}`)
    }

    HideOnScroll(props) {
        const { children, window } = props
        const trigger = useScrollTrigger()
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        )
    }

    render() {
        const { classes } = this.props
        return (
            // <this.HideOnScroll {...this.props}>
                <AppBar /*position="sticky"*/ /*color="default"*/>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" title="Menu">
                            <MenuIcon />
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
            // </this.HideOnScroll>
        )
    }
}

function mapStateToProps(state) {
    return {
        session: state.session,
    }
}

const connectedMainHeader = connect(mapStateToProps)(MainHeader)
const MainHeaderWithStyle = withStyles(styles)(connectedMainHeader)
export default withRouter(MainHeaderWithStyle)
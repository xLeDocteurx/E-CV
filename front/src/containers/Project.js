// import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles, Hidden} from '@material-ui/core'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'
import {jsenv} from '../env'

// import {Transition, TransitionGroup, CSSTransition} from 'react-transition-group'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
import Zoom from '@material-ui/core/Zoom'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

import clsx from 'clsx'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import Divider from '@material-ui/core/Divider'

import ProjectHeader from '../components/SubHeaders/ProjectHeader'
// import ProjectHeaderProminent from '../ProjectHeader/ProjectHeaderProminent'

import {sectionsActions, projectsActions} from '../actions'
import { relative } from 'path';
import { FORMERR } from 'dns';

// import {projectsApi} from '../api'

const styles = theme => ({
    root: {
        width: '100%',
        // flexGrow: 1,
        backgroundColor: grey[100],

        // [theme.breakpoints.down('sm')]: {
        //     // paddingLeft: 20,
        //     // paddingRight: 20,
        // },
        // [theme.breakpoints.up('sm')]: {
        //     paddingLeft: '10vw',
        //     paddingRight: '10vw',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     paddingLeft: '15vw',
        //     paddingRight: '15vw',
        // },
    },
    grow: {
        flexGrow: 1,
    },
    w100: {
        width: '100%',
    },
    invisible: {
        visibility: 'hidden',
    },
    menuButton: {
        marginRight: 20,
    },
    bandeau: {
        // minHeight: 300,
        // height: '100%',
    },

    card: {
        // maxWidth: 345,
        // width: '75%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
})

class Project extends Component {

    constructor(props){
        super(props)

        this.state = {
            pageTitle:'Project',
            animState: 'default',
            // animDuration: 3000,
            animDuration: 450,
            expanded: true,
            setExpended: true,
        }

        // this.timer = null
    }

    componentDidMount() {
        if(this.props.selectedProject.project) {
            // document.title = `${jsenv.REACT_APP_APP_NAME} - ${this.state.pageTitle} : ${this.props.match.params.name}`
        } else {
            this.props.dispatch(projectsActions.getOne(this.props.match.params.slug, () => this.getProjectCallback()))
        }

        this.setState({animState: 'entering'})
		// setTimeout(() => {this.setState({animState: 'entering'})}, this.state.animDuration)
        // this.setState({animState: 'entered'})
		// setTimeout(() => {this.setState({animState: 'entered'})}, this.state.animDuration)
    }

    componentDidUpdate(prevProps) {
        document.title = `${jsenv.REACT_APP_APP_NAME} - ${this.state.pageTitle} - ${this.props.selectedProject.project ? this.props.selectedProject.project.name : 'Loading ...'}`

    }

    componentWillUnmount() {
            // this.setState({animState: 'exiting'})
    }

    // redirectTo(path) {
    //     this.props.history.push(`${path}`)
    // }

    renderLoading() {
        if(
            this.props.sections.isLoading ||
            this.props.selectedProject.isLoading
        ) {
            return <LinearProgress className={this.props.classes.w100} />
        }
    }

    getProjectCallback() {
        // this.redirectTo('/_404')
    }

    getDefaultStyle(from) {

        return {
            // margin: 'auto',

            overflow: 'auto',

            transition: `all ${this.state.animDuration}ms ease-in-out`,

            transitionProperty: `border, top, right, bottom, left, height, width`,
            // transitionDuration: this.state.animDuration,
            // transitionDelay: 2s,

            ...from,
            // top: from.top,
            // left: from.left,
            // bottom: from.bottom,
            // right: from.right,
            // width: from.width,
            // height: from.height,
            
            position: 'fixed',
            // position: 'absolute',
            
            zIndex: 1200,
            background: 'white',

            // border: '5px blue solid',
        }
    }

    getTransitionStyles(from) {

        return {
            entering: {
                // border: '5px yellow solid',

                top: 0,
                right: 0,
                bottom: 0,
                // bottom: -25,
                left: 0,
                height: '100vh',
                width: '100vw',
            },
            entered:  {
                position: relative,
                // border: '5px green solid',

                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
            },
            exiting:  {
                // border: '5px red solid',

                ...from,
                // opacity: 0,
            },
        }
    }
    
    handleExpandClick() {
        this.setState({expanded: !this.state.expanded})
    }

    isExiting() {
        this.setState({animState: 'exiting'})
        document.title = `${jsenv.REACT_APP_APP_NAME} - Portfolio`
		setTimeout(() => {this.props.history.push(`/portfolio`)}, this.state.animDuration)
    }

    render() {

        // const {classes} = this.props

        // const from = this.props.location.state && this.props.location.state.from ? this.props.location.state.from : {display: 'block'}
        const from = /*this.props.selectedProject.from &&*/ this.props.selectedProject.from ? this.props.selectedProject.from : {}
        const defaultStyle = this.getDefaultStyle(from)
        const transitionStyles = this.getTransitionStyles(from)
        const animState = this.state.animState

        const {expanded, setExpended} = this.state

        const project = this.props.selectedProject.project ? this.props.selectedProject.project : null

        return (

            <div style={{...defaultStyle, ...transitionStyles[animState]}}>
                <ProjectHeader pageTitle={project ? project.name : null} isExiting={() => this.isExiting()} />
                {/* <AppBar position="static" className={this.props.classes.invisible}>
                    <Toolbar>
                    </Toolbar>
                </AppBar> */}

                <Grid container className={this.props.classes.root}>
                    {/* {this.renderLoading()} */}

                    {project &&
                                    
                        <Card className={this.props.classes.card}>
                            <CardMedia
                            className={this.props.classes.media}
                            image={project.image || "https://picsum.photos/1200/800"}
                            title={project.name + "'s image"}
                            />
                            <CardHeader
                            // avatar={
                            //     <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                            //     L
                            //     </Avatar>
                            // }
                            action={
                                <IconButton aria-label="Settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={project.name}
                            subheader={project.createdAt}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions /*disableSpacing*/>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(this.props.classes.expand, {
                                    [this.props.classes.expandOpen]: expanded,
                                    })}
                                    onClick={() => this.handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {project.extendedDesciption}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    }

                </Grid>
            </div>
    
    //     </CSSTransition>
    // </TransitionGroup>


            // // <Zoom in={this.state.zoom} style={{ transitionDelay: this.state.zoom ? '500ms' : '0ms' }}>
            //     <Grid container direction="column" justify="center" alignItems="center">
            //     {/* <ProjectHeader pageTitle={this.state.pageTitle}/> */}
            //     {/* {this.renderLoading()} */}
    
            //     {/* {this.renderProject()} */}
                
            //         <Paper elevation={4} className={this.props.classes.paper}>
            //             ...LoL...
            //         </Paper>
            //     </Grid>
            // // </Zoom>
        )
    }
}

function mapStateToProps(state) {
    return {
        sections: state.sections,
        selectedProject: state.selectedProject,
    }
}

const connectedProject = connect(mapStateToProps)(Project)
const ProjectWithStyles = withStyles(styles)(connectedProject)
export default withRouter(ProjectWithStyles)

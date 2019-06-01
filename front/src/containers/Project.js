import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'

// import {Transition, TransitionGroup, CSSTransition} from 'react-transition-group'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
import Zoom from '@material-ui/core/Zoom'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'

import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'

import red from '@material-ui/core/colors/red'

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

// import {projectsApi} from '../api'

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
    paper: {
        height: '100%',
    },
    card: {
        // maxWidth: 400,
    },
    avatar: {
      backgroundColor: red[500],
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
})

class Project extends Component {

    constructor(props){
        super(props)

        this.state = {
            pageTitle:'Project',
            animState: 'default',
            animDuration: 300,
        }

        // this.timer = null
    }

    componentDidMount() {
        if(this.props.selectedProject.project) {
            // document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle} : ${this.props.match.params.name}`
        } else {
            this.props.dispatch(projectsActions.getOne(this.props.match.params.slug, () => this.getProjectCallback()))
        }
        
        this.setState({animState: 'entering'})
        // this.setState({animState: 'entered'})
		// this.timer = setTimeout(() => {this.setState({animState: 'entered'})}, 4000)
		setTimeout(() => {this.setState({animState: 'entered'})}, this.state.animDuration)
    }

    componentDidUpdate() {
        document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle} - ${this.props.selectedProject.project ? this.props.selectedProject.project.name : 'Loading ...'}`
    }

    componentWillUnmount() {
        this.setState({animState: 'exiting'})
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
            transition: `border ${this.state.animDuration}ms ease-in-out`,

            transitionProperty: `top, right, bottom, left, height, width`,
            transitionDuration: this.state.animDuration,
            // transitionDelay: 2s,

            ...from,
            position: 'fixed',
            // position: 'absolute',
            
            zIndex: 1200,
            background: 'white',
            // border: '5px yellow solid',
            
            // /* add opacity to see if the other view is actually kept below */
            // opacity: 0.75,
        }
    }

    getTransitionStyles() {
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
                // border: '5px green solid',

                top: 0,
                right: 0,
                bottom: 0,
                // bottom: -25,
                left: 0,
                height: '100vh',
                width: '100vw',
            },
            // exiting:  {
            //     border: '5px red solid',
            //     // opacity: 0 
            // },
            // exited:  {
            //     // opacity: 0 
            //     },
        }
    }

    renderProject() {

        return (
            <div /*component="nav"*/>
                {JSON.stringify(this.props)}
            </div>
        )
    }

    render() {
        // const {classes} = this.props

        // const from = this.props.location.state && this.props.location.state.from ? this.props.location.state.from : {display: 'block'}
        const from = /*this.props.selectedProject.from &&*/ this.props.selectedProject.from ? this.props.selectedProject.from : {}
        const defaultStyle = this.getDefaultStyle(from)
        const transitionStyles = this.getTransitionStyles()
        const animState = this.state.animState

        return (

        <div style={{...defaultStyle, ...transitionStyles[animState]}}>
            <Grid container direction="column" justify="center" alignItems="center">
                <ProjectHeader pageTitle={this.props.selectedProject.project ? this.props.selectedProject.project.name : null} />
                {this.renderLoading()}

                <div>_</div>
                {this.props.selectedProject.project &&
                // <Grid container direction="column" justify="center" alignItems="center">
                    <Card className={this.props.classes.card}>
                        <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                            R
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                        />
                        <CardActionArea>
                                <CardMedia
                                className={this.props.classes.media}
                                image={this.props.selectedProject.project.image || "https://picsum.photos/id/" + 0 + "/1200/800"}
                                title={this.props.selectedProject.project.name + "'s image"}
                                />
                        </CardActionArea>
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions className={this.props.classes.actions} disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton
                                className={classnames(this.props.classes.expand, {
                                [this.props.classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                            </Typography>
                            <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth bring to a boil.
                            </Typography>
                            <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                            to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                            cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                        </Collapse>
                    </Card>
                // </Grid>
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
                
            //         <Paper elevation={4} className={classes.paper}>
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
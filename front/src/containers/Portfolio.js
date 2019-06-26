// import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import {withRouter} from 'react-router-dom'
import {jsenv} from '../env'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'

import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'

import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import MoreVertIcon from '@material-ui/icons/MoreVert'
// import Divider from '@material-ui/core/Divider'
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeaders/MainHeader'
// import MainHeaderProminent from '../components/MainHeader/MainHeaderProminent'
import Project from './Project'

import {sessionActions, sectionsActions, projectsActions} from '../actions'

// import {projectsApi} from '../api'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: grey[50],
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
    centeredCircularProgress: {
        // color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -20,
        marginLeft: -20,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    gridList: {
        // width: '100vw',
        // height: '90vh',
        margin: '1em',
    },
    card: {
    //   maxWidth: 345,
        height: '100%',
    },
    media: {
        // height: 140,
        // margin: 10,
        [theme.breakpoints.down('sm')]: {
            height: 140,
        },
        [theme.breakpoints.up('md')]: {
            height: 210,
        },
        [theme.breakpoints.up('lg')]: {
            height: 280,
        },
    },
    avatar: {
        backgroundColor: blue[500],
    },
})

class Portfolio extends Component {

    constructor(props){
        super(props)

        this.state = {
            pageTitle:"Portfolio",
            // fade: true,

            selectedProjectId: null,
        }
    }

    componentDidMount() {
        this.props.dispatch(sessionActions.setPageTitle(this.state.pageTitle))
        document.title = `${jsenv.REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        // this.getSections()
        if(!this.props.projects.projects) {
            this.props.dispatch(projectsActions.getAll(() => this.getAllCallback()))
        }
    }

    componentWillUnmount() {
        // this.setState({fade: false})
    }

    // getSections() {
    //     this.props.dispatch(sectionsActions.getOne('avatar'))
    // }

    sortedProjects() {
        return this.props.projects.projects.sort((a, b) => {
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }

    getProject(id, slug, e) {
        this.setState({selectedProjectId: id})

        const target = e.target
        const {top, right, bottom, left, width, height} = target.getBoundingClientRect()
        const from = {top, right, bottom, left, width, height}

        this.props.dispatch(projectsActions.getOne(slug, () => this.getProjectCallback(slug, from), from))
    }

    getAllCallback() {

    }

    getProjectCallback(slug, from) {
        // console.log('from : ', from)
        this.props.history.push({
            pathname: `/portfolio/${slug}`,
            state: {
                to: 'modal',
                from: from,
            },
        })
    }

    renderBandeau() {
            return (
                <Grid item xs={12} className={this.props.classes.bandeau}>
                    Ceci est mon portfolio.<br/>
                    J'aime mon portfolio!
                </Grid>
                // <Grid container direction="column" justify="center" alignItems="center" className={classes.bandeau}>
                //     <Paper /*className={classes.root}*/ /*elevation={1}*/>
                //         <Typography variant="h5" component="h3">
                //             Portfolio
                //         </Typography>
                //         <Typography component="p">
                //             {this.props.sections.sections.portfolio_Intro.textContent}
                //         </Typography>
                //     </Paper>
                // </Grid>
            )
    }

    renderProjects() {
        if(this.props.projects.error) { return JSON.stringify(this.props.projects.error) }

        if(this.props.projects.isLoading) {      
            return null      
            return (
                <Grid container direction="column" justify="center" alignItems="center">
                    <CircularProgress />
                </Grid>
            )
        } else if(this.props.projects.projects) {

            return (
                // <GridList cellHeight={240} className={this.props.classes.gridList} style={{margin: 0}} cols={4}>
                <Grid container spacing={2} className={this.props.classes.gridList}>
                    {this.sortedProjects().map((project, project_index) => {

                        let selected = this.state.selectedProjectId == project._id && this.props.selectedProject.isLoading ? true : false

                        return (

                            <Grid key={project_index} item xs={12} sm={6} md={4} lg={3} onClick={(e) => this.getProject(project._id, project.slug, e)}>
                                <Card className={this.props.classes.card}>
                                    <CardActionArea /*onClick={(e) => this.getProject(project._id, project.slug, e)}*/>
                                        <CardMedia
                                        className={this.props.classes.media}
                                        image={project.image || "https://picsum.photos/1200/800"}
                                        title={project.name}
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
                                        subheader={project.description}
                                        />
                                        {/* <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {project.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {project.description}
                                            </Typography>
                                        </CardContent> */}
                                    </CardActionArea>
                                    {/* <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
                // </GridList>
            )
        } else {
            return 'WTF'
        }
    }

    render() {

        return (
            <Grid container className={this.props.classes.root}>
                {/* {this.renderLoading()} */}
                
                {/* {this.renderBandeau()} */}
                {this.renderProjects()}
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

const connectedPortfolio = connect(mapStateToProps)(Portfolio)
const PortfolioWithStyle = withStyles(styles)(connectedPortfolio)
export default withRouter(PortfolioWithStyle)
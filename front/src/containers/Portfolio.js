import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import {withRouter} from 'react-router-dom'

import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
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
        // width: '100%',
        // height: '90vh',
    },
    // media: {
    //     // margin: 10,
    //     [theme.breakpoints.down('sm')]: {
    //         height: 200,
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         height: 250,
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         height: 300,
    //     },
    // },
})

class Portfolio extends Component {

    constructor(props){
        super(props)

        this.state = {
            pageTitle:"Portfolio",
            fade: true,

            selectedProjectId: null,
        }
    }

    componentDidMount() {
        this.props.dispatch(sessionActions.setPageTitle(this.state.pageTitle))
        document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        // this.getSections()

        this.props.dispatch(projectsActions.getAll(() => this.getAllCallback()))
    }

    componentWillUnmount() {
        this.setState({fade: false})
    }

    renderLoading() {
        if(
            this.props.sections.isLoading ||
            // this.props.selectedProject.isLoading ||
            this.props.projects.isLoading
        ) {
            return <LinearProgress className={this.props.classes.w100} />
        }
    }

    getSections() {
        this.props.dispatch(sectionsActions.getOne('avatar'))
    }

    getProject(id, slug, e) {
        this.setState({selectedProjectId: id})

        const target = e.target
        const { top, right, bottom, left, width, height } = target.getBoundingClientRect()
        const from = { top, right, bottom, left, width, height }

        this.props.dispatch(projectsActions.getOne(slug, () => this.getProjectCallback(slug, from), from))
    }

    sortedProjects() {
        return this.props.projects.projects.sort((a, b) => {
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }

    getAllCallback() {

    }

    getProjectCallback(slug, from) {

        console.log('from : ', from)
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
                <Grid container direction="column" justify="center" alignItems="center" className={this.props.classes.bandeau}>
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
                <GridList cellHeight={240} className={this.props.classes.gridList} style={{margin: 0}} cols={3}>
                    {this.sortedProjects().map((project, project_index) => {

                        let selected = this.state.selectedProjectId == project._id && this.props.selectedProject.isLoading ? true : false

                        return (
                            // <GridListTile ref={this.state.projectsRefs[project.slug]} key={project_index} cols={project.cols || 1}>
                            <GridListTile key={project_index} cols={project.cols || 1} className={this.props.classes.gridList}
                            //  button
                             onClick={(e) => this.getProject(project._id, project.slug, e)} 
                            //  disabled={selected} selected={selected}
                            >
                                <img src={project.image || "https://picsum.photos/1200/800"} alt={project.name} title={project.name + '\'s image'} />
                                <GridListTileBar
                                title={project.name}
                                subtitle={<span>{project.description}</span>}
                                actionIcon={
                                    <IconButton className={this.props.classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                                />

                                {/* {selected ? <CircularProgress className={this.props.classes.centeredCircularProgress}/> : null} */}
                            </GridListTile>
                        )
                    })}
                </GridList>
            )
        } else {
            return 'WTF'
        }
    }

    render() {

        return (
            <Grid container justify="center" alignItems="center">
                {this.renderLoading()}
                
                <Grid container>
                    {/* {this.renderBandeau()} */}
                    {this.renderProjects()}
                </Grid>
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
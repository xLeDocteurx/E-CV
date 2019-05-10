import runtimeEnv from '@mars/heroku-js-runtime-env'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
// import {withRouter} from 'react-router-dom'

import MainHeader from '../components/MainHeader/MainHeader'
import MainHeaderProminent from '../components/MainHeader/MainHeaderProminent'

import {sectionsActions, skillsActions} from '../actions';

// import {skillsApi} from '../api'

const styles = theme => ({

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
            "pageTitle":"Home",
        }
    }
    
	componentDidMount() {
        document.title = `${runtimeEnv().REACT_APP_APP_NAME} - ${this.state.pageTitle}`

        this.getSections()
        
        this.props.dispatch(skillsActions.getAll())
    }

    getSections() {
        this.props.dispatch(sectionsActions.getOne('avatar'))
        this.props.dispatch(sectionsActions.getOne('citation'))
    }

    renderLoading() {
        if(
            this.props.sections.isLoading ||
            this.props.skills.isLoading ||
            this.props.selectedSkill.isLoading
        ) {
            return <LinearProgress />
        }
    }

    renderBandeau() {
        if(this.props.sections.error) { return JSON.stringify(this.props.sections.error) }

        if(this.props.sections.isLoading) {
            return 'loading'
        } else if(this.props.sections.sections.avatar && this.props.sections.sections.citation) {
            const { classes } = this.props
            return (
                <Grid container direction="column" justify="center" alignItems="center" className={classes.bandeau}>
                    <Avatar alt={this.props.sections.sections.avatar.name} src={this.props.sections.sections.avatar.textContent} className={classes.bigAvatar} title={this.props.sections.sections.avatar.name} />
                    <div>{this.props.sections.sections.citation.textContent}</div>
                </Grid>
                // <div>
                //     <div>
                //         <img src={this.props.sections.sections.avatar.textContent} title={this.props.sections.sections.avatar.name} />
                //     </div>
                //     <div>
                //         {this.props.sections.sections.citation.textContent}
                //     </div>
                // </div>
            )
        } else {
            return 'WTF'
        }
    }

    renderSkills() {
        if(this.props.skills.error) { return JSON.stringify(this.props.skills.error) }

        if(this.props.skills.isLoading) {
            return 'loading'
        } else if(this.props.skills.skills) {
            return (
                // JSON.stringify(this.props.skills.skills)
                this.props.skills.skills.map((skill, ski) => (
                    <div>
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
            <Grid container direction="column" justify="center" alignItems="center" className="mainContainer">
                <MainHeader pageTitle={this.state.pageTitle}/>
                {this.renderLoading()}

                {this.renderBandeau()}
                {this.renderSkills()}
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
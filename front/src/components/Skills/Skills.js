import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
    skills: {
        marginTop: '1em',
        // marginBottom: '1em',
    },
    grow: {
        flexGrow: 1,
    },
    w100: {
        width: '100%',
    },
})

function Skills(props) {

    if(props.skills.error) { return JSON.stringify(props.skills.error) }

    /*if(props.skills.isLoading) {
        return (
            <Grid container direction="column" justify="center" alignItems="center" className={props.classes.bandeau}>
                <CircularProgress />
            </Grid>
        )
    } else */if(props.skills.skills) {
        return (
            <Grid item xs={12} className={props.classes.skills}>
                <Paper>
                    <Typography variant="h4" component="h1" align="center">
                        Compétences
                    </Typography>
                    <Divider variant="middle" />
                    {/* JSON.stringify(props.skills.skills) */}
                    {props.skills.skills.map((skill, skill_index) => (
                        <div key={skill_index}>
                            {skill.name}
                            <p>
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </Paper>
            </Grid>
        )
    } else {
        return 'WTF'
    }
}

export default withStyles(styles)(Skills)
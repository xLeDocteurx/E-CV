import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import grey from '@material-ui/core/colors/grey'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        // backgroundColor: grey[100],
        // backgroundColor: 'white',
        // flexGrow: 1,
        // height: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    w100: {
        width: '100%',
    },
})

function Timeline(props) {

    function sortByFirstYear(array) {
        return array.sort((a, b) => {
            a = new Date(a.firstYear)
            b = new Date(b.firstYear)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }
        
    if(props.experiences.error) { return JSON.stringify(props.experiences.error) }

    /*if(props.experiences.isLoading) {
        return (
            <Grid container direction="column" justify="center" alignItems="center" className={props.classes.bandeau}>
                <CircularProgress />
            </Grid>
        )
    } else */if(props.experiences.experiences) {
        return (
            <Grid item xs={12} className={props.classes.root}>
                <Paper>
                    {/* <h1>
                        Expériences
                    </h1> */}
                    <Typography variant="h4" component="h1" align="center">
                        Expériences
                    </Typography>
                    <div className="timeline">
                        <ul>
                            {sortByFirstYear(props.experiences.experiences).map((experience, experience_index) => {
                                const {color, name, title, description, firstYear, lastYear} = experience
                                return (
                                    <li key={experience_index}>
                                        <div className={`bullet contour_${color}`}></div>
                                        <div className="time">xxx</div>
                                        <div className="time">{lastYear ? `${firstYear} - ${lastYear}` : firstYear}</div>
                                        <div className="desc">
                                            <h3>{name}</h3>
                                            <h4>{title}</h4>
                                            <div className="people">
                                                {description}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Paper>
            </Grid>
        )
    } else {
        return 'WTF'
    }
}

// export default Timeline
export default withStyles(styles)(Timeline)
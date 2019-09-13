import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
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
        marginTop: '1em',
        marginBottom: '1em',
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
                    <Divider variant="middle" />

                </Paper>

                    <section id="cd-timeline" className="cd-container">
                        {sortByFirstYear(props.experiences.experiences).map((experience, experience_index) => {
                            const {color, name, title, description, firstYear, lastYear} = experience
                            return (
                                // <div ></div>
                                <div className="cd-timeline-block" key={experience_index}>
                                    <div className={`cd-timeline-img bullet contour_${color}`}>
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="timeline icon" />
                                    </div>
                        
                                    <div className="cd-timeline-content">
                                        <h5>{name}</h5>
                                        <h6 style={{color: grey[600]}}>{title}</h6>
                                        <p>{description}</p>

                                        {/* <a href="#0" class="cd-read-more">Read more</a> */}

                                        <span className="cd-date">{lastYear ? `${firstYear} - ${lastYear}` : firstYear}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                {/* </Paper> */}
            </Grid>
        )
    } else {
        return 'WTF'
    }
}

// export default Timeline
export default withStyles(styles)(Timeline)
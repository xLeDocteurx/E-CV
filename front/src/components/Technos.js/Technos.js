import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import grey from '@material-ui/core/colors/grey'

import FaceIcon from '@material-ui/icons/Face'
// import classes from '*.module.scss';

const styles = theme => ({
    // root: {
    //     width: '100%',
    //     // maxWidth: 360,
    //     backgroundColor: grey[100],
    //     // flexGrow: 1,
    //     // height: '100%',
    // },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: grey[100],
    },
    grow: {
        flexGrow: 1,
    },
    w100: {
        width: '100%',
    },
    chip: {
        margin: theme.spacing(1),
    },
})

function Technos(props) {

    if(props.technos.error) { return JSON.stringify(props.technos.error) }

    /*if(props.technos.isLoading) {
        return (
            <Grid container direction="column" justify="center" alignItems="center" className={props.classes.bandeau}>
                <CircularProgress />
            </Grid>
        )
    } else */if(props.technos.technos) {
        return (
            <Grid item xs={12}>
                <Typography variant="h3" component="h1" align="center">
                    Technologies
                </Typography>
                <div className={props.classes.root}>
                    {props.technos.technos.map((techno, techno_index) => (
                        <Chip 
                        key={techno_index}
                        className={props.classes.chip}
    
                        // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                        avatar={
                            <Avatar>
                                <FaceIcon />
                            </Avatar>
                        }
                        label={techno.name}
                        // onClick={handleClick}
                        // onDelete={handleDelete}
                        // className={classes.chip}
                        // variant="outlined"
                        // color="primary"
                        />
                    ))}
                </div>
            </Grid>
        )
    } else {
        return 'WTF'
    }
}

// export default Technos
export default withStyles(styles)(Technos)
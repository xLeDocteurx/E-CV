import React, {Component, Fragment} from 'react'
import {withStyles, FormHelperText} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
    bandeau: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '5vw',
        paddingBottom: '3vw',
        // width: '60vw',
        // textAlign: 'center',
    },
    bigAvatar: {
        // marginTop: '10vw',
        // marginBottom: '10vw',
        width: '20vw',
        height: '20vw',
        
        marginLeft: 'auto',
        marginRight: 'auto',
        // [theme.breakpoints.down('sm')]: {
        //     width: '37vw',
        //     height: '37vw',
        // },
        // [theme.breakpoints.up('sm')]: {
        //     width: '20vw',
        //     height: '20vw',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     width: '20vw',
        //     height: '20vw',
        // },
    },
    citation: {
        marginTop: '2.5vw',
    },
})

function Bandeau(props) {

        return (
            <div
            className={props.classes.bandeau}
            >
                {/* <Fragment> */}
                    <Avatar alt="Photo" src="./img/avatar.jpg" className={props.classes.bigAvatar} title="Ma photo" />
                    <Typography /*variant="h4" component="h1"*/ align="center" className={props.classes.citation}>
                        " Il ne faut jamais baisser les bras. sauf si c'est dans la chorégraphie! "<br/>
                        - Moi
                    </Typography>
                {/* </Fragment> */}
            </div>
        )
}

export default withStyles(styles)(Bandeau)
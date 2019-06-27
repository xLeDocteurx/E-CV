import React, {Component, Fragment} from 'react'
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

import grey from '@material-ui/core/colors/grey'

import FaceIcon from '@material-ui/icons/Face'
// import classes from '*.module.scss';

const styles = theme => ({
    // root: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     flexWrap: 'wrap',
    // },
    root: {
        // backgroundColor: 'white',
        // display: 'flex',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // width: '100%',
        // maxWidth: 360,
        // backgroundColor: grey[50],
        // position: 'relative',
        // overflow: 'auto',
        // maxHeight: 300,
    },
    // grow: {
    //     flexGrow: 1,
    // },
    // w100: {
    //     width: '100%',
    // },
    list: {
        // backgroundColor: 'white',
        // padding: '5em',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
})

class Formation extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    sortByDate(array) {
        return array.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            // return a>b ? -1 : a<b ? 1 : 0
            return b - a
        })
    }

    render() {
        if(this.props.education.error) { return JSON.stringify(this.props.education.error) }

        if(this.props.education.education) {

            const sortedEducation = this.sortByDate(this.props.education.education)
            
            return (
                <Grid item xs={12}
                className={this.props.classes.root}
                >
                    <Paper>
                        <Typography variant="h3" component="h1" /*align="center"*/>
                            Formation
                        </Typography>
                        <List 
                        className={this.props.classes.list}
                        // subheader={<ListSubheader>Formation</ListSubheader>}
                        >
                            <ListItem divider style={{padding:0}} />
                            {sortedEducation.map((item, item_id) => (
                                <ListItem key={`item-${item_id}`} divider>
                                    <ListItemText primary={item.name} secondary={item.description} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            )
        } else {
            return 'WTF'
        }
    }
}

function mapStateToProps(state) {
    return {
        formations: state.formations,
    }
}

const connectedFormation = connect(mapStateToProps)(Formation)
export default withStyles(styles)(connectedFormation)
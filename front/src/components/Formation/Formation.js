import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
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
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: grey[100],
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

    formations = [
        {
            name: 'Titre pro - Développeur web et applications mobile - Niveau IV',
            description: 'Formation'
        },
        {
            name: 'Certification - Qualité en projets web',
            description: 'OpQuast'
        },
        {
            name: 'BTS - Métiers de l\'électrotechnique',
            description: 'CFA de Toulouse'
        },
        {
            name: 'BT - Monteur technicien en réseaux électriques',
            description: 'Basse tension / Haute tension'
        },
        // {
        //     name: 'xxx',
        //     description: 'xxx'
        // },
    ]

    render() {

        return (
            <Grid item xs={12}>
                <List className={this.props.classes.root} subheader={<li />}>
                <Typography variant="h3" component="h1" align="center">
                    Formation
                </Typography>
                    {/* {[0, 1, 2, 3, 4].map(sectionId => (
                        <li key={`section-${sectionId}`} className={this.props.classes.listSection}>
                            <ul className={this.props.classes.ul}> */}
                                {/* <ListSubheader>{`I'm sticky`}</ListSubheader> */}
                                {this.formations.map((item, item_id) => (
                                <ListItem key={`item-${item_id}`}>
                                    <ListItemText primary={item.name} secondary={item.description} />
                                </ListItem>
                                ))}
                            {/* </ul>
                        </li>
                    ))} */}
                </List>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        formations: state.formations,
    }
}

const connectedFormation = connect(mapStateToProps)(Formation)
export default withStyles(styles)(connectedFormation)
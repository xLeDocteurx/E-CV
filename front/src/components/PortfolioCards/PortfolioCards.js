import React from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import {withRouter} from 'react-router-dom'

import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'

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

const styles = theme => ({
    card: {
    //   maxWidth: 345,
        height: '100%',
    },
    media: {
      height: 140,
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
    },
    avatar: {
        backgroundColor: blue[500],
    },
})

function PortfolioCards(props) {

    return (
        <Grid key={props.project_index} item xs={12} sm={6} md={4} lg={3} onClick={(e) => props.getProject(props.project._id, props.project.slug, e)}>
            <Card className={props.classes.card}>
                <CardActionArea /*onClick={(e) => getProject(props.project._id, props.project.slug, e)}*/>
                    <CardMedia
                    className={props.classes.media}
                    image={props.project.image || "https://picsum.photos/1200/800"}
                    title={props.project.name}
                    />
                    <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={props.classes.avatar}>
                            <MoreVertIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="Settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.project.name}
                    subheader={props.project.description}
                    />
                    {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.project.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.project.description}
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
}

export default withStyles(styles)(PortfolioCards)
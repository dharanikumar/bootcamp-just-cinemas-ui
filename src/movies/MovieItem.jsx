import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    maxWidth: 220
  },
  media: {
    height: 250,
  },
}

function MovieItem({ movie, classes }) {

  let { name, experiences, id, iconUrl} = movie
  return (
    <Link to={`/movies/${id}`}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={iconUrl}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {experiences}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

MovieItem.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  slug: PropTypes.string,
  movie: PropTypes.object
}

export default withStyles(styles)(MovieItem)
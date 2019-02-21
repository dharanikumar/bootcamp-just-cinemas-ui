import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'

class YoutubeDialog extends React.Component {

 

  render() {
    return(
      <Dialog
        open={this.props.open}
      >
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Dialog>
    )
  }
}

YoutubeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired
}

export default YoutubeDialog
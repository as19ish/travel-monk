import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css'

class Youtube_player extends React.Component {
  render() {
    const opts = {
      height: this.props.height,
      width: this.props.width,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube className='y_tube_video' videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube_player;
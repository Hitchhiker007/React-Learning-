import React from 'react';
import './MusicPlayer.css'; // Import CSS file

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioIndex: Math.floor(Math.random() * this.props.audioFiles.length) // Select a random index
    };
  }

  componentWillUnmount() {
    // Add any cleanup code here if needed
  }

  render() {
    const { audioFiles } = this.props;
    const { audioIndex } = this.state;

    return (
      <div className="music-player">
        <audio controls autoPlay volume={0.5}> {/* Set the default volume to 50% */}
          <source src={audioFiles[audioIndex]} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default MusicPlayer;

import React from 'react';
import audioFile from './theme.mp3'; // Import the audio file
import './MusicPlayer.css'; // Import CSS file

class MusicPlayer extends React.Component {
  componentWillUnmount() {
  }

  render() {
    return (
      <div className="music-player">
        <audio controls autoPlay volume={0.5}> {/* Set the default volume to 50% */}
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default MusicPlayer;

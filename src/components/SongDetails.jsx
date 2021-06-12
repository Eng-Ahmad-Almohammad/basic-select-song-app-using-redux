import React from 'react';
import {connect} from 'react-redux';

const SongDetails = (props)=>{
    if (!props.song) {
      return ( <div>
          <h3>
          Select a song
          </h3>
           
        </div>)
    }
    return (<div>
        <h3>
        Song Details:
        </h3>

        <p>
            Title: {props.song.title}
            <br />
            Duration: {props.song.duration}
        </p>
       
    </div>)
}

const mapStatetoProps = (state) => {
    
    return {song : state.selectedSong}
}

export default connect(mapStatetoProps)(SongDetails)
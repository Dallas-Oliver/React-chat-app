import React, { Component } from "react";

class Video extends Component {
  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false
      })
      .then(localMediaStream => {
        this.refs.video.srcObject = localMediaStream;
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="video-container">
        <video ref="video" autoPlay={true} className="video-element" />
      </div>
    );
  }
}

export default Video;

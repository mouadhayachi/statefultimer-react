import React from "react";
import './App.css'

export default class StatefulTimer extends React.Component {
  // INITIALIZING THE STATES
  state = {
    time: 0,
    play: true
  };

  // START TIMER WITH CHANGING TIME STATE / THE INTERVAL BY DEFAULT 1000 MILLISECONDS 1000 MS = 1 S
  startTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState({
        play: false,
        time: this.state.time + 1
      });
    }, 1000);
  };

  // PAUSE TIMER WITH CLEARING INTERVAL
  pauseTimer = () => {
    this.myInterval = clearInterval(this.myInterval);
    this.setState({ play: true });
  };

  // RESETING TIMER WITH INITIALLING STATE AND CLEARING INTERVAL
  resetTimer = () => {
    this.setState({ time: 0, play: true });
    clearInterval(this.myInterval);
  };

  render() {

  // CONVERTING TIME FROM SECONDS TO HOURS & MINUTES & SECONDS
  let hours = String(parseInt(this.state.time / 3600)).padStart(2, "0");
  let minutes = String(parseInt((this.state.time % 3600) / 60)).padStart(2,"0");
  let seconds = String(parseInt(this.state.time % 60)).padStart(2, "0");

  return(
    <div className="container">
        {hours}:{minutes}:{seconds}
        <div>
          {this.state.play ? (
          <i class="fas fa-play-circle fa-sm btn" onClick={() => this.startTimer()}/>):(<i class="fas fa-pause-circle fa-sm btn" onClick={() => this.pauseTimer()}/>)}  
          <i class="fa fa-refresh fa-sm btn" aria-hidden="true" onClick={() => this.resetTimer()} />
        </div>
    </div>
    );
  }
}
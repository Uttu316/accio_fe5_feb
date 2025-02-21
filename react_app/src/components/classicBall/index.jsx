import { Component } from "react";
import styles from "./ball.module.css";

class ClassicBall extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
      pos: 0,
    };

    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
  }

  onStart() {
    this.setState({ started: true });
  }
  onMove() {
    this.setState({ pos: this.state.pos + 5 });
  }
  render() {
    const isStarted = this.state.started;
    const pos = this.state.pos;
    return (
      <div>
        {!isStarted && (
          <button onClick={this.onStart} className={styles.start}>
            Start
          </button>
        )}
        {isStarted && (
          <div>
            <div
              style={{ transform: `translate(${pos}px)` }}
              className={styles.ball}
            ></div>
            <button onClick={this.onMove}> Move</button>
          </div>
        )}
      </div>
    );
  }
}

export default ClassicBall;

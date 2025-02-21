import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: props.start,
    };
    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onAdd() {
    this.setState({ count: this.state.count + 1 });
  }
  onMinus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { start } = this.props;
    return (
      <div>
        <h1>Class Counter - start with {start}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onMinus}>Minus</button>
      </div>
    );
  }
}
export default ClassCounter;

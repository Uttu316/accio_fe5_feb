import { Component } from "react";
import { api } from "../../services";

class LifeCycle extends Component {
  constructor(props) {
    super();
    console.log("Constructor", props);
    this.state = {
      status: "loading",
      jokes: [],
    };
  }

  async getData() {
    this.setState({ status: "loading" });
    try {
      const res = await api({
        endpoint: "public/randomjokes",
      });

      const { data } = res;
      this.setState({ status: "done", jokes: data });
    } catch (e) {
      console.log(e);
      this.setState({ status: "error" });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Update component?", { nextProps, nextState });
    if (nextState.status === this.state.status) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Snapshot", prevProps, prevState, this.props, this.state);
    return null;
  }
  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  componentDidMount() {
    console.log("Mounted");
    this.getData();
  }
  render() {
    console.log("Render");

    const { status, jokes } = this.state;

    const isLoading = status === "loading";
    const isDone = status === "done";
    const isError = status === "error";

    return (
      <div>
        <h1>Welcome To Life cycle Methods</h1>
        {isLoading && <h2>Loading....</h2>}
        {isDone && (
          <div>
            <h2>Top Jokes</h2>
            <ol>
              {jokes.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ol>
          </div>
        )}
        {isError && <h2>Something Went Wrong</h2>}
      </div>
    );
  }
}

export default LifeCycle;

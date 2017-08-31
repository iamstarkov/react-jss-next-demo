import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  counter: {
    // backgroundColor: 'red',
    backgroundColor: 'green',
  },
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2 className={this.props.classes.counter}>
        Counter: {this.state.counter}
      </h2>
    );
  }
}

export default injectSheet(styles)(Counter);

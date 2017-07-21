import React, { Component } from 'react';
import { ThemeProvider } from '@iamstarkov/react-jss';

import { Dynamic, Static, Counter } from '../components';

const light = {
  // color: 'green',
  color: 'tomato',
  bg: '#f5f5f5',
};

const dark = {
  color: '#fff',
  bg: '#333',
};


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      isLight: true,
      radius: 50,
    };

    this.toggleTheme = () => {
      this.setState(prevState => ({
        isLight: !prevState.isLight,
      }));
    };
    this.setRadius = e => {
      this.setState({
        radius: e.target.value,
      });
    };

    this.toggle = () => {
      this.setState(prevState => ({
        show: !prevState.show,
      }));
    };
  }
  render() {
    return (
      <div style={{ margin: '50px' }}>
        <h1>Hello from advanced jss theming</h1>
        <div>
          <button onClick={this.toggle}>Toggle</button>
        </div>
        <div>
          <button onClick={this.toggleTheme}>Toggle theme</button>
        </div>
        <div>
          borderRadius:
          {' '}
          <input
            type="number"
            onChange={this.setRadius}
            value={this.state.radius}
            step="10"
            min="0"
            max="100"
          />
        </div>
        <br />
        {this.state.show &&
          <div>
            <ThemeProvider theme={this.state.isLight ? light : dark}>
              <div>
                <Static radius={this.state.radius}>static</Static>
                <Dynamic radius={this.state.radius}>static</Dynamic>
                <Counter />
              </div>
            </ThemeProvider>
          </div>}
      </div>
    );
  }
}

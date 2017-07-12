import React from 'react';
import injectSheet, { withTheme } from 'react-jss';

const styles = {
  dynamic: {
    padding: '.75em 1.25em',
    height: '200px',
    width: '200px',
    display: 'inline-flex',
    'justify-content': 'center',
    'align-items': 'center',
    'box-sizing': 'border-box',
    transition: 'all 0.1s linear',
    'margin-right': '1em',
    border: '1px solid transparent',

    'border-radius': props => `${props.radius}px`,
    color: ({ theme }) => theme.color,
    'background-color': ({ theme }) => theme.bg,
  },
};

const Dynamic = ({ classes, children }) => (
  <div className={classes.dynamic}>
    {children}
  </div>
);

export default withTheme(injectSheet(styles)(Dynamic));

import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  static: {
    padding: '.75em 1.25em',
    height: '200px',
    width: '200px',
    display: 'inline-flex',
    'justify-content': 'center',
    'align-items': 'center',
    'box-sizing': 'border-box',
    transition: 'all 0.1s linear',
    'margin-right': '1em',
    border: 0,

    'border-radius': props => `${props.radius}px`,
    color: theme.color,
    'background-color': theme.bg,
  },
});

const Static = ({ classes, children }) => (
  <div className={classes.static}>
    {children}
  </div>
);

export default injectSheet(styles)(Static);

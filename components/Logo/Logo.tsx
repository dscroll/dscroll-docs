import React from 'react';
import classes from './Logo.module.css';

export function Logo() {
  return (
    <div className={classes.logoContainer}>
      <span className={classes.letterD}>D</span>
      <span className={classes.textScroll}>Scroll</span>
      <span className={classes.logoDot} />
    </div>
  );
}

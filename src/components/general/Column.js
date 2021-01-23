import React from 'react'

const Column = ({ classes, title, children, key}) => {
  return (
    <div className={classes.wrapperClasses} key={key}>
      <div className={classes.titleClasses}>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default Column

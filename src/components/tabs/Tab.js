import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ title, handleClick }) => {
  return (
    <div className={styles.Tab} onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func
};

export default Tab;

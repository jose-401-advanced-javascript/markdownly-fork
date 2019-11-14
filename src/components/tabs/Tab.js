import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ title, changeTabs }) => {
  return (
    <div onClick={() => changeTabs(title)} className={styles.Tab}>
      <h2>{title}</h2>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  changeTabs: PropTypes.func
};

export default Tab;

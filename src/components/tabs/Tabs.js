import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from './Tabs.css';

const Tabs = ({ tabs, handleClick }) => {
  console.log(tabs);
  const tabElements = tabs.map((tab, i) => {
    return (
      <li key={i}>
        <Tab title={tab} handleClick={handleClick} />
      </li>
    );
  });
  return (
    <ul className={styles.Tabs}>
      {tabElements}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func
};

export default Tabs;

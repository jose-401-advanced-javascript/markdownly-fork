import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from './Tabs.css';

const Tabs = ({ tabs, changeTabs }) => {
  const tabElements = tabs.map((tab, i) => {
    return (
      <li key={i}>
        <Tab title={tab} changeTabs={changeTabs} />
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
  changeTabs: PropTypes.func
};

export default Tabs;

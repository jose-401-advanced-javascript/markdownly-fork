import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs }) => {
  const tabElements = tabs.map((tab, i) => {
    return (
      <li key={i}>
        <Tab {...tab} />
      </li>
    );
  });
  return (
    <ul>
      {tabElements}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    handleClick: PropTypes.func
  }))
};

export default Tabs;

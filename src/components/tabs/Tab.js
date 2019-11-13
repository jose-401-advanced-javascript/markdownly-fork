import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, handleClick }) => {
  return (
    <div onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func
};

export default Tab;

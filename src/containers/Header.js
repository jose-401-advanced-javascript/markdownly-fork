import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from '../components/tabs/Tabs';
import { getFiles } from '../selectors/headerSelectors';
import { addFile } from '../actions/headerActions';

const Header = ({ tabs, handleClick }) => {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Tabs tabs={tabs} handleClick={handleClick} />
    </>
  );
};

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func
};

const mapStateToProps = state => ({
  tabs: getFiles(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick({ target }) {
    dispatch(addFile(target.value));
  }
}); 

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;

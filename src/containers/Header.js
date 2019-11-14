import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from '../components/tabs/Tabs';
import { getFiles } from '../selectors/headerSelectors';
import { addFile } from '../actions/headerActions';
import Form from '../components/form/Form';

const Header = ({ tabs, handleClick, handleSubmit }) => {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Form handleSubmit={handleSubmit}/>
      {/* <Tabs tabs={tabs} handleClick={handleClick} /> */}
    </>
  );
};

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  markdown: PropTypes.string
};

const mapStateToProps = state => ({
  tabs: getFiles(state),
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(title) {
    dispatch(addFile(title));
  },
  // handleChange({ target }) {
  //   event.preventDefault();
  //   dispatch({
  //     type: 'FORM_UPDATE',
  //     payload: target.value
  //   });
  // }
}); 

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from '../components/tabs/Tabs';
import { getFiles } from '../selectors/headerSelectors';
import { addFile } from '../actions/headerActions';
import Form from '../components/form/Form';

const Header = ({ tabs, handleClick, title, handleChange, handleSubmit }) => {
  console.log(tabs);
  return (
    <>
      <h1>Markdown Editor</h1>
      <Form title={title} handleChange={handleChange} handleSubmit={event => handleSubmit(event, title)}/>
      <Tabs tabs={tabs} handleClick={handleClick} />
    </>
  );
};

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

const mapStateToProps = state => ({
  tabs: getFiles(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit({ target }) {
    event.preventDefault();
    dispatch(addFile(target.value));
  },
  handleChange({ target }) {
    event.preventDefault();
    dispatch({
      type: 'FORM_UPDATE',
      payload: target.value
    });
  }
}); 

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;

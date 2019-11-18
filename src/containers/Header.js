import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFiles } from '../selectors/headerSelectors';
import Form from '../components/form/Form';
import Tabs from '../components/tabs/Tabs';
import { addFile, deleteTabs } from '../actions/headerActions';
import { switchTabs } from '../actions/documentActions';

export default function Header() {

  const tabs = useSelector(getFiles);
  const dispatch = useDispatch();
  const handleSubmit = (title) => dispatch(addFile(title));
  const changeTabs = (title) => dispatch(switchTabs(title));
  const deleteTab = (title) => dispatch(deleteTabs(title));
  return (
    <>
      <h1>Markdown Editor</h1>
      <Form handleSubmit={handleSubmit}/>
      <Tabs tabs={tabs} changeTabs={changeTabs} deleteTab={deleteTab} />
    </>
  );

}

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  markdown: PropTypes.string, 
  changeTabs: PropTypes.func,
  deleteTab: PropTypes.func
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ title, handleChange, handleSubmit }) => {
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={handleChange} placeholder="New file name"></input>
      <button>Create File</button>
      <button className={styles.saveButton} type="button"><img src="assets/save_file_icon.png"></img></button>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;

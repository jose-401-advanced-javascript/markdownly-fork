import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { updateMarkdown } from '../actions/documentActions';
import { getMarkdown } from '../selectors/documentSelectors';

export default function Document() {
  const markdown = useSelector(getMarkdown);
  const dispatch = useDispatch();
  const changeMarkdown = ({ target }) => dispatch(updateMarkdown(target.value));
  return (
    <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={changeMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string,
  updateMarkdown: PropTypes.func.isRequired
};

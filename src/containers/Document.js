import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateMarkdown } from '../actions/documentActions';
import { getMarkdown } from '../selectors/documentSelectors';
// import Header from './Header';

const Document = ({ markdown, updateMarkdown }) => {
  
  return (
    <>
        <div className={styles.Document}>
          {/* <Header markdown={markdown} /> */}
          <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
  );
};

Document.propTypes = {
  markdown: PropTypes.string,
  updateMarkdown: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }

});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;

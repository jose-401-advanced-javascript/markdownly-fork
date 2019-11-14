import { UPDATE_MARKDOWN } from '../actions/documentActions';
import { ADD_FILE } from '../actions/headerActions';

const initialState = {
  active: '',
  files: {
    test: ''
  }
};

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    case ADD_FILE:
      return { ...state, active: action.payload, files: { ...state.files, [action.payload]: '' } };
    case 'FORM_UPDATE':
      return { ...state, title: action.payload };
    default: 
      return state;
  }
}

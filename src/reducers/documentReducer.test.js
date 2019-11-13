import reducer from './documentReducer';
import { updateMarkdown } from '../actions/documentActions';

describe('Document Reducer', () => {
  it('should update markdown', () => {
    const state = {
      markdown: 'Hello'
    };
    const action = updateMarkdown('Hello2');
    const newState = reducer(state, action);
    expect(newState).toEqual({ ...state, markdown: 'Hello2' }); 
  });
});

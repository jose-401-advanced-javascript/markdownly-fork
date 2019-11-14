import { addFile } from '../actions/headerActions';
import reducer from './headerReducer';

describe('Header Reducer', () => {
  it('should update tabs', () => {
    const state = {
      tabs: []
    };

    const action = addFile('Readme');
    const newState = reducer(state, action);
    expect(newState).toEqual({ ...state, tabs: ['Readme'] });
  });
});

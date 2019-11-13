import { ADD_FILE } from '../actions/headerActions';


const initialState = {
  tabs: ['README', 'Other File', 'Notes']
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_FILE:
      return { ...state, tabs: [...state.tabs, action.payload] };
    default:
      return state;
  }
}

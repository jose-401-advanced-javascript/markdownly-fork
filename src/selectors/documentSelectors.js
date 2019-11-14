import store from '../store';

const tabName = store.getState();
// console.log(tabName)
export const getMarkdown = state => state.document.files[tabName.document.active];

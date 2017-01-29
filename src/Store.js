import { createStore } from 'redux';

const objects = (state = [2], action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat([action.payload]);
    default:
      return state;
  }
}

export default createStore(objects)

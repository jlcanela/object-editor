import { createStore } from 'redux';

const objects = (state = [2], action) => {
  console.log('change state ?');
  switch (action.type) {
    case 'ADD':
      return state.concat([action.payload]);
    default:
      return state;
  }
}

export const store = createStore(objects);

export function addObject(id) {
    console.log('adding object');
  return {
    type: 'ADD',
    payload: id,
  }
}

import { createStore, combineReducers } from 'redux';

let currentId = 0;
function getId() {
  return currentId++;
}

const objects = (state = [], action) => {
  console.log('change state ?');
  switch (action.type) {
    case 'ADD':
    console.log(action.payload);
      return state.concat([action.payload]);
    default:
      return state;
  }
}

const form = (state = { name: '', description: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {...state, name: action.payload};
    case 'UPDATE_DESCRIPTION':
        return {...state, description: action.payload};
    case 'ADD':
        return { name:'', description: ''};
    default:
      return state;
  }
}

export const store = createStore(combineReducers({objects, form}));

export function addObject(name, description) {
  return {
    type: 'ADD',
    payload: {
      id: getId(),
      name,
      description
    }
  }
}

export function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    payload: name,
  }
}

export function updateDescription(description) {
  return {
    type: 'UPDATE_DESCRIPTION',
    payload: description,
  }
}

import * as actionTypes from './actionTypes.js';

export function requestMovies(items) { // movies gives the passed value/object an object reference, simple terms makes it a
  const action = {              // property that's paired with an action type,
    type: actionTypes.MOVIES,               // Example: action.type and action.items.
    items
  }
  return action;
}

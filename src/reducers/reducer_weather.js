import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // we use concat instead of push because we want to return a completely new instance of application state (instead of manipulating it)
      // return state.concat([ action.payload.data ]);
      console.log('This is state: ', state);
      return [ action.payload.data, ...state ] // returns a new array with action.payload.data and all the destructured elements inside array 'state'
  }
  return state;
}
// State of reducer function is not whole application state, only the state the reducer is reponsible for
export default function(state, action) {
  switch(action.type) {
    case 'BOOK_SELECT':
      return action.payload
  }
  
  return state;
}
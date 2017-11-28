import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, // TODO: why does this set the return value of the function instead of just the function as state?
  activeBook: ActiveBook,
});

export default rootReducer;

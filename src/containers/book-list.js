import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">{book.title}
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned here will show up as props to BookList
  return {
    books: state.books
  };
}

// Anything return from this function will end up as props to the container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called it's result is passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promotes component to container.  BookList needs to know about the new dispatch method; selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
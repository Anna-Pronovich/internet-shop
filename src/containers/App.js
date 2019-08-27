import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  booksActions from '../actions/books';
import orderBy from 'lodash/orderBy';
import App from '../components/App';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');    
    case 'author':
      return orderBy(books, 'author', 'asc'); 
    default: 
      return books;
  }
};

const filterBooks = (books, searchQuery) => books.filter( 
  b => 
    b.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 || 
    b.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuary) => {
  return sortBy(filterBooks(books, searchQuary), filterBy);
}

const mapStateToProps = ({ books, filter }) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuary),
  isReady: books.isReady,
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

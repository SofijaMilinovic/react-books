import { Component } from 'react';
import './Books.css';
import Filters from './Filters/Filters.js';
import Book from './Book/Book.js';
import { books } from '../../../data/data.js';

class Books extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: books.slice(),
        };
    }
  
    updateBooks = filteredBooks => {
        this.setState({ books: filteredBooks });
    }

    render() {
        return (
            <div className="Books container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Filters updateBooksProp={this.updateBooks} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                        <div className="container">
                            <div className="row">
                                {this.state.books.map(book => {
                                    return (
                                        <div key={book.id} className="col-lg-3 col-md-4 col-sm-12 col-12">
                                            <Book bookProp={book} addBookToCartProp={ this.props.addBookToCartProp } removeBookFromCartProp={ this.props.removeBookFromCartProp }/>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Books;

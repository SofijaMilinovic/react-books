import { Component } from 'react';
import './Books.css';
import Filters from './Filters/Filters.js';
import Book from './Book/Book.js';

class Books extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            books: [],
        };
    }

    componentDidMount() {
        this.props.setCurrentActiveLinkProp('/books');

        fetch("http://localhost:8080/books")
            .then(res => res.json())
            .then(
                (books) => {
                    this.setState({
                        isLoaded: true,
                        books: books
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    updateBooks = filteredBooks => {
        this.setState({ books: filteredBooks });
    }

    renderBooks() {
        return (
            <div className="Books container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Filters books={this.state.books} updateBooksProp={this.updateBooks} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                        <div className="container">
                            <div className="row">
                                {this.state.books.map(book => {
                                    return (
                                        <div key={book.id} className="col-lg-3 col-md-4 col-sm-12 col-12">
                                            <Book bookProp={book} addBookToCartProp={this.props.addBookToCartProp} removeBookFromCartProp={this.props.removeBookFromCartProp} />
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

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return this.renderBooks();
        }
    }
}

export default Books;

import { Component } from 'react';
import './BookDetails.css';
import { bookImagesPath, bookPriceLimits } from '../../../data/data.js';

class BookDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: '',
            imagePath: '',
            genreId: null,
            authorId: null,
            price: '',
            created: false,
            responseMessage: null,
            genres: [],
            authors: []
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImagePathChange = this.handleImagePathChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setCurrentActiveLinkProp('/books');

        const adminUrl = 'http://localhost:8080/auth/admin';
        const postBody = {
            id: sessionStorage.getItem("userId")
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        fetch(adminUrl, requestMetadata)
            .then(res => res.json())
            .then(
                (response) => {
                    if (response.statusCode == 200) {
                        this.fetchGenres();
                    } else {
                        this.props.history.push('/');
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    fetchGenres() {
        fetch("http://localhost:8080/genres")
            .then(res => res.json())
            .then(
                (genres) => {
                    this.setState({
                        genres: genres,
                        genreId: genres[0].id
                    });
                    this.fetchAuthors();
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    fetchAuthors() {
        fetch("http://localhost:8080/authors")
            .then(res => res.json())
            .then(
                (authors) => {
                    this.setState({
                        authors: authors,
                        authorId: authors[0].id,
                        isLoaded: true,
                        error: null
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

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleImagePathChange(event) {
        this.setState({ imagePath: event.target.value });
    }

    handleGenreChange(event) {
        this.setState({ genreId: event.target.value });
    }

    handleAuthorChange(event) {
        this.setState({ authorId: event.target.value });
    }

    handlePriceChange(event) {
        this.setState({ price: event.target.value });
    }

    clearForm() {
        this.setState({
            title: '',
            imagePath: '',
            genreId: null,
            authorId: null,
            price: '',
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const genreId = this.state.genreId;
        const authorId = this.state.authorId;
        const booksUrl = 'http://localhost:8080/books';
        const postBody = {
            title: this.state.title,
            imagePath: this.state.imagePath,
            genreData: { id: genreId },
            authorData: { id: authorId },
            price: this.state.price
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        fetch(booksUrl, requestMetadata)
            .then(res => res.json())
            .then(
                (response) => {
                    if (response.statusCode == 201) {
                        this.setState({ created: true, responseMessage: response.message });
                        this.clearForm();
                    } else {
                        this.setState({ created: false, responseMessage: response.message });
                    }
                },
                (error) => {
                    this.setState({ created: false, responseMessage: error });
                }
            );
    }

    renderBookDetails() {
        const genreOptions = this.state.genres.map((genre) =>
            <option key={genre.id} value={genre.id}>{genre.name}</option>
        );

        const authorOptions = this.state.authors.map((author) =>
            <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Title</label>
                            <input type="text" className="form-control offset-bottom" required value={this.state.title} onChange={this.handleTitleChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Price</label>
                            <input type="number" min={bookPriceLimits.lower} max={bookPriceLimits.upper} className="form-control offset-bottom" required value={this.state.price} onChange={this.handlePriceChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Genre</label>
                            <select id="genre" className="form-control offset-bottom" onChange={this.handleGenreChange}>
                                {genreOptions}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Author</label>
                            <select id="author" className="form-control offset-bottom" onChange={this.handleAuthorChange}>
                                {authorOptions}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Image</label>
                            <input type="text" className="form-control offset-bottom" required value={this.state.imagePath} onChange={this.handleImagePathChange}></input>
                            <img className="book-image" src={bookImagesPath + '/' + this.state.imagePath + '.png'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <button className="btn btn-primary btn-create" type="submit">Create</button>
                        </div>
                    </div>

                    {this.state.responseMessage ? (
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className={this.state.created ? "alert alert-primary" : "alert alert-danger"}>
                                    {this.state.responseMessage}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </form>
        );
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return this.renderBookDetails();
        }
    }
}

export default BookDetails;

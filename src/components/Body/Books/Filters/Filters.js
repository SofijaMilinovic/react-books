import { Component } from 'react';
import './Filters.css';
import { books, genres, bookPriceLimits } from '../../../../data/data.js';

class Filters extends Component {
    componentDidMount = () => {
        this.filters = {
            title: document.getElementById('title'),
            author: document.getElementById('author'),
            priceFrom: document.getElementById('priceFrom'),
            priceTo: document.getElementById('priceTo'),
            genre: document.getElementById('genre'),
        };
    }

    
    filterBooks = () => {
        let filteredBooks = books.filter(book => {
            return this.checkBookTitle(book) &&
                this.checkBookAuthor(book) &&
                this.checkBookPrice(book) &&
                this.checkBookGenre(book);
        });

        this.props.updateBooksProp(filteredBooks);
    }

    checkBookTitle = book => {
        const titleFilter = this.filters.title.value;
        return !/\S/.test(titleFilter) || book.title.toLowerCase().includes(titleFilter.toLowerCase());
    }

    checkBookAuthor = book => {
        const authorFilter = this.filters.author.value;
        return !/\S/.test(authorFilter) || book.author.toLowerCase().includes(authorFilter.toLowerCase());
    }

    checkBookPrice = book => {
        const priceFrom = this.filters.priceFrom.value;
        const priceTo = this.filters.priceTo.value;

        if (priceFrom && !priceTo && priceFrom >= bookPriceLimits.lower && priceFrom <= bookPriceLimits.upper && book.price >= priceFrom) {
            return true;
        }

        if (priceTo && !priceFrom && priceTo >= bookPriceLimits.lower && priceTo <= bookPriceLimits.upper && book.price <= priceTo) {
            return true;
        }

        if (priceTo && priceFrom && priceTo >= bookPriceLimits.lower && priceTo <= bookPriceLimits.upper &&
            priceFrom >= bookPriceLimits.lower && priceTo <= bookPriceLimits.upper && priceFrom <= priceTo && book.price >= priceFrom && book.price <= priceTo) {
            return true;
        }

        if (!priceTo && !priceFrom) {
            return true;
        }

        return false;
    }

    checkBookGenre = book => {
        const selectedGenre = this.filters.genre.value;
        if (selectedGenre == 'All') {
            return true;
        }
        return book.genre == selectedGenre;
    }

    resetFilters = () => {
        this.filters.title.value = '';
        this.filters.author.value = '';
        this.filters.priceFrom.value = null;
        this.filters.priceTo.value = null;
        this.filters.genre.value = 'All';
        this.filterBooks();
    }

    render() {
        return (
            <div className="Filters">

                <label>Title</label>
                <input id="title" type="text" className="form-control offset-bottom" onChange={this.filterBooks}></input>

                <label>Author</label>
                <input id="author" type="text" className="form-control offset-bottom" onChange={this.filterBooks}></input>

                <label>Price from</label>
                <input min={bookPriceLimits.lower} max={bookPriceLimits.upper} id="priceFrom" type="number" className="form-control" onChange={this.filterBooks}></input>

                <label>Price to</label>
                <input min={bookPriceLimits.lower} max={bookPriceLimits.upper} id="priceTo" type="number" className="form-control offset-bottom" onChange={this.filterBooks}></input>

                <label>Genre</label>
                <select id="genre" className="form-control offset-bottom" onChange={this.filterBooks}>
                    <option value="All">All</option>
                    <option value={genres.genre1}>{genres.genre1}</option>
                    <option value={genres.genre2}>{genres.genre2}</option>
                    <option value={genres.genre3}>{genres.genre3}</option>
                    <option value={genres.genre4}>{genres.genre4}</option>
                </select>

                <button className="btn btn-primary" onClick={this.resetFilters}>
                    Reset filters
                </button>
            </div>
        );
    };
}

export default Filters;

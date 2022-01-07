import React, { useState } from 'react';
import './Book.css';
import { bookImagesPath } from '../../../../data/data.js';

function Book(props) {

    const book = props.bookProp;
    const [showBookButtons, setShowBookButtons] = useState(false);

    return (
        <div className="Book"
            onMouseEnter={() => setShowBookButtons(true)}
            onMouseLeave={() => setShowBookButtons(false)}>
            <img className="book-image" src={bookImagesPath + '/' + book.image} />
            <div>{book.genre}</div>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.price} <span style={{color: "green"}}>$</span></div>

            {showBookButtons ?
                (<>
                    <div className="remove-book-container">
                        <button className="book-button btn-danger" onClick={ () => props.removeBookFromCartProp(book) }>-</button>
                    </div>
                    <div className="add-book-container">
                        <button className="book-button btn-success" onClick={ () => props.addBookToCartProp(book) }>+</button>
                    </div>
                </>) : null
            }
        </div>
    );
}

export default Book;

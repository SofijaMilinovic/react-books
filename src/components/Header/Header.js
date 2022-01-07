import './Header.css';
import { bookImagesPath } from '../../data/data.js';

function Header(props) {

    const getLogoSrc = () => {
        return bookImagesPath + '/e-book.png';
    }

    const getCartLogoSrc = () => {
        return bookImagesPath + '/cart.png';
    }

    return (
        <div className="Header">
            <div className="row">
                <div className="col-lg-3">
                    <a className="navbar-brand" href="#">
                        <img src={getLogoSrc()} className="d-inline-block align-top e-book-logo"></img>
                    </a>
                </div>
                <div className="col-lg-6 e-book-text">
                    E-BOOK
                </div>
                <div className="col-lg-3">
                    <div className="navbar-brand">
                        <img src={getCartLogoSrc()} className="d-inline-block align-top e-book-logo"></img>
                        <div className="cart-logo">
                            <span>{ props.numberOfBooksInCartProp }</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

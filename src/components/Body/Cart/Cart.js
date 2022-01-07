import './Cart.css';
import Book from '../Books/Book/Book.js';
import { Component } from 'react';

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            purchased: false,
        };
    }

    onBuy = () => {
        this.setState({ purchased: true });
        this.props.clearCartProp();
        setTimeout(() => this.setState({ purchased: false }), 5000);
    }

    render() {
        const cart = this.props.cartProp;

        const getTotalCartAmount = () => {
            let totalCartAmount = 0;
            for (let i = 0; i < cart.length; i++) {
                totalCartAmount += cart[i].book.price * cart[i].amount;
            }
            return totalCartAmount;
        }

        return (
            <div className="row">
                <div className="col-lg-3 col-md-3 total-cart-amount">
                    Total amount:
                    <div>{getTotalCartAmount()} <span style={{ color: "green" }}>$</span></div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="row">
                        {cart.length == 0 ?
                            (<div className="offset-lg-3 col-lg-6 cart-empty">
                                Cart is empty
                            </div>) : (
                                cart.map(cartEntry => {
                                    return (
                                        <div key={cartEntry.book.id} className="col-lg-3 col-md-4 col-sm-12 col-12">
                                            <Book bookProp={cartEntry.book}
                                                addBookToCartProp={this.props.addBookToCartProp}
                                                removeBookFromCartProp={this.props.removeBookFromCartProp} />
                                            <div className="book-amount">
                                                Amount: {cartEntry.amount}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <button className="btn btn-primary btn-buy" onClick={this.onBuy}>Buy</button>
                    {this.state.purchased ?
                        (<div class="alert alert-primary">
                            Purchase successful!
                        </div>) : null}
                </div>
            </div>
        );
    }
}

export default Cart;

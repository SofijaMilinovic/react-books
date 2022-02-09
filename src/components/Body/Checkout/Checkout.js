import './Checkout.css';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: '',
            city: '',
            address: '',
            password: '',
            orderPlaced: false,
            responseMessage: null
        };

        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setCurrentActiveLinkProp(null);
    }

    handleCountryChange(event) {
        this.setState({ country: event.target.value });
    }

    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }

    handleAddressChange(event) {
        this.setState({ address: event.target.value });
    }

    getTotalCartAmount = (cart) => {
        let totalCartAmount = 0;
        for (let i = 0; i < cart.length; i++) {
            totalCartAmount += cart[i].book.price * cart[i].amount;
        }
        return totalCartAmount;
    }

    clearForm = () => {
        this.setState({
            country: '',
            city: '',
            address: ''
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.orderPlaced) {
            return;
        }

        const orderEntryDataList = this.props.cartProp.map(cartEntry => ({ bookData: cartEntry.book, quantity: cartEntry.amount }));
        const ordersUrl = 'http://localhost:8080/orders';
        const postBody = {
            country: this.state.country,
            city: this.state.city,
            address: this.state.address,
            orderEntryDataList: orderEntryDataList,
            userData: {
                id: sessionStorage.getItem("userId")
            }
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        fetch(ordersUrl, requestMetadata)
            .then(res => res.json())
            .then(
                (response) => {
                    if (response.statusCode == 201) {
                        this.setState({ orderPlaced: true, responseMessage: response.message });
                        this.props.clearCartProp();
                        this.clearForm();
                        setTimeout(() => {
                            this.props.history.push('/');
                        }, 3000);
                    } else {
                        this.setState({ orderPlaced: false, responseMessage: response.message });
                    }
                },
                (error) => {
                    this.setState({ orderPlaced: false, responseMessage: error });
                }
            );
    }

    render() {
        const cart = this.props.cartProp;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Country</label>
                            <input type="text" className="form-control offset-bottom" required value={this.state.country} onChange={this.handleCountryChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>City</label>
                            <input type="text" className="form-control offset-bottom" required value={this.state.city} onChange={this.handleCityChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <label>Address</label>
                            <input type="text" className="form-control offset-bottom" required value={this.state.address} onChange={this.handleAddressChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 total-amount">
                            <label>Total amount</label>
                            <div>{this.getTotalCartAmount(cart)} <span style={{ color: "green" }}>$</span></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <button className="btn btn-primary btn-place-order" type="submit">Place order</button>
                        </div>
                    </div>

                    {this.state.responseMessage ? (
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className={this.state.orderPlaced ? "alert alert-primary" : "alert alert-danger"}>
                                    {this.state.responseMessage}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </form>
        );
    }
}

export default withRouter(Checkout);

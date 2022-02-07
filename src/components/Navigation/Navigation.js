import { Component } from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentActiveLink: '/',
        };
    }

    setCurrentActiveLink = link => {
        this.setState({ currentActiveLink: link });
    }

    render() {
        return (
            <div className="Navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <NavigationItem link="/"
                                text="Home"
                                setCurrentActiveLinkProp={this.setCurrentActiveLink}
                                currentActiveLinkProp={this.state.currentActiveLink} />
                        </div>
                        <div className="col-lg-2">
                            <NavigationItem link="/books"
                                text="Books"
                                setCurrentActiveLinkProp={this.setCurrentActiveLink}
                                currentActiveLinkProp={this.state.currentActiveLink} />
                        </div>
                        <div className="col-lg-2">
                            <NavigationItem link="/cart"
                                text="Cart"
                                setCurrentActiveLinkProp={this.setCurrentActiveLink}
                                currentActiveLinkProp={this.state.currentActiveLink} />
                        </div>
                        <div className="col-lg-3">
                            <NavigationItem link="/login"
                                text="Login"
                                setCurrentActiveLinkProp={this.setCurrentActiveLink}
                                currentActiveLinkProp={this.state.currentActiveLink} />
                        </div>
                        <div className="col-lg-3">
                            <NavigationItem link="/register"
                                text="Register"
                                setCurrentActiveLinkProp={this.setCurrentActiveLink}
                                currentActiveLinkProp={this.state.currentActiveLink} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;

import { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: new Date().toLocaleString(),
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (
            <div className="Footer">
                {this.state.currentTime}
            </div>
        );
        
    }
}

export default Footer;

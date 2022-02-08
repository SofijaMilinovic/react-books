import './Admin.css';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.props.setCurrentActiveLinkProp('/admin');

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
            this.setState({ isLoaded: true });
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

  renderAdminPanel() {
    return (
      <div className="Admin">
        Admin panel
      </div>
    );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return this.renderAdminPanel();
    }
  }
}

export default withRouter(Admin);

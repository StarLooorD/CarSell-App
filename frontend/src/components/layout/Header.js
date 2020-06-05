import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/carlist" className="nav-link">
            Cars List
          </Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/dashboard">Sell Car</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/mycars">My Cars</a>
        </li>
        <span className="navbar-text">
          <strong>{user ? `Hi ${user.username}` : ''}</strong>
        </span>
        <li className="nav-item">
          <button onClick={this.props.logout} className="btn btn-warning">
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/carlist" className="nav-link">
            Cars List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#/home"><b>GetRocket</b></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/home">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/home">Contacts</a>
                </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
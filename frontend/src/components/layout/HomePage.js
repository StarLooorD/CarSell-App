import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import '../../../css/index.css';


export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="emptext">
                        <div className="minititle">
                            <h1><b>GetRocket</b></h1>
                            <h5><b>Buy cars! Not scrap metal!</b></h5>
                        </div>
                    </div>
                    <a href="#/dashboard">
                        <button type="button" className="btn btn-outline-dark">Get Started!</button>
                    </a>
                </div>
                <div className="main">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="info-title">
                                <h3><b>Checked Car</b></h3>
                            </div>
                            <div className="info-text">
                                <h4>All the cars are testing in service, so you don't need to check it on your own</h4>
                            </div>
                            <div className="info-image">
                                <img src="../../static/frontend/checked_car.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="info-title">
                                <h3><b>Confirmed Docs</b></h3>
                            </div>
                            <div className="info-text">
                                <h4>All the important documents are checking, to be sure of legality of the sale</h4>
                            </div>
                            <div className="info-image">
                                <img src="../../static/frontend/confirmed_docs.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="info-title">
                                <h3><b>Fixed Price</b></h3>
                            </div>
                            <div className="info-text">
                                <h4>Before selling our manager lower the price if it is too high</h4>
                            </div>
                            <div className="info-image">
                                <img src="../../static/frontend/fixed_price.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="community" id="community">
                    <div className="emptext">
                        <div className="minititle">
                            <h3><b>Community</b></h3>
                        </div>
                        <div className="communitydata">
                            <p>GetRocket Mebers: <b>194 126</b></p>
                            <p>From over <b>14</b> countries</p>
                            <p>Cars Sold In General: <b>26 484</b></p>
                            <p>Cars Now Availible: <b>34 564</b></p>
                        </div>
                    </div>
                </div>
                <div className="contacts" id="contacts">
                    <div className="minititle">
                        <h3><b>Contact Us</b></h3>
                    </div>
                    <div className="contactsdata">
                        <p>Tel: +38 (067) 37 36 436</p>
                        <p>email: tarash281@gmail.com</p>
                        <div className="networks">
                            <img src="../../static/frontend/telegram_ico.png" />
                            <img src="../../static/frontend/facebook_ico.png" />
                            <img src="../../static/frontend/twitter_ico.png" />
                        </div>
                    </div>
                </div>
                <footer>
                    <p>&copy; GetRocket Official. All rights reserved.</p>
                </footer>
            </Fragment>
        );
    }
}


export default connect()(HomePage);
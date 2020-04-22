import React from 'react';
import './homepage.css';
import { Link } from "react-router-dom";
import Banner from '../../assets/img/menu-list-banner.jpg';
import Pizza from '../../assets/img/Pizza_img.jpg';

import CoreHttpService from '../../core/config/CoreHttpHandler';

class Home extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div className="banner">
                    <img className="OF-cover img-responsive" src={Banner} alt="" />
                    <div className="banner-overlay"></div>
                    <div className="banner-title">
                        <h5>restaurant</h5>
                        <h1>Pizza House</h1>
                        <p>Juicy | Delicious | Tasty</p>
                    </div>
                </div>

                <div id="dannys" className="restaurant-menu dark-bg-color min-height-720 position-relative">
                    <div className="menu-left-detail padding-top-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="menu-inner-left padding-right-90">
                                        <div className="section-title">
                                            <h2>Restaurant</h2>
                                            <h3 className="white">menu</h3>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-sm-6 col-md-6">
                                                <p className="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <p className="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                            </div>
                                        </div>
                                        <Link to="/menu" className="btn-default">what’s on the menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-right-img" style={{background: `url(${Pizza})`}}></div>
                </div>
            </div>
        );
    }
}

export default Home;
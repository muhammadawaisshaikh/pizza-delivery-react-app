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
                <div class="banner">
                    <img class="OF-cover img-responsive" src={Banner} alt="" />
                    <div class="banner-overlay"></div>
                    <div class="banner-title">
                        <h5>restaurant</h5>
                        <h1>Pizza House</h1>
                        <p>Juicy | Delicious | Tasty</p>
                    </div>
                </div>

                <div id="dannys" class="restaurant-menu dark-bg-color min-height-720 position-relative">
                    <div class="menu-left-detail padding-top-150">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div class="menu-inner-left padding-right-90">
                                        <div class="section-title">
                                            <h2>Restaurant</h2>
                                            <h3 class="white">menu</h3>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-sm-6 col-md-6">
                                                <p class="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                            </div>
                                            <div class="col-sm-6 col-md-6">
                                                <p class="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                            </div>
                                        </div>
                                        <Link to="/menu" class="btn-default">what’s on the menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-right-img" style={{background: `url(${Pizza})`}}></div>
                </div>
            </div>
        );
    }
}

export default Home;
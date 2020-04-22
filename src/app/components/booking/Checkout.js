import React from 'react';
import './booking.css';

import CoreHttpService from '../../core/config/CoreHttpHandler';

class Menu extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        
        return (
            <div>
                <div class="content inner-pg reservation-section">
                    <div class="container">
                        <div class="reservation-form">
                            <div class="row">
                                <div class="col-sm-10 col-md-8 col-centered">
                                    <form>
                                        <h5>contact details</h5>
                                        <div class="row contact-detail">
                                            <div class="col-sm-4 col-md-4">
                                                <div class="form-group">
                                                    <label>name</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-4 col-md-4">
                                                <div class="form-group">
                                                    <label>email</label>
                                                    <input type="email" class="form-control"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-4 col-md-4">
                                                <div class="form-group">
                                                    <label>mobile</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-12">
                                                <div class="form-group">
                                                    <label>Address</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="send-message text-center">
                                            <a type="submit" class="btn-default">Order Now</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
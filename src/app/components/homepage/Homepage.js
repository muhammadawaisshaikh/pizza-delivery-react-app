import React from 'react';
import './homepage.css';
import Banner from '../../assets/img/menu-list-banner.jpg';
import { connect } from "react-redux";

import CoreHttpService from '../../core/config/CoreHttpHandler';
import { AddUser, UpdateUser } from "../../redux/actions/taskAction";

class Home extends React.Component {

    constructor(props) {
      super(props);
    }

    // getting all users
    getUsers = () => {

        let params = {
            id: '1'
        }

        CoreHttpService.request('users', 'listing', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    // creating new user normally
    addUser = () => {
        let params = {
            "name": "morpheus",
            "job": "leader"
        }

        CoreHttpService.request('users', 'add_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    // getting a single user
    getUser = () => {
        let params = {
            "key": 'id',
            "value": 1
        }

        CoreHttpService.request('users', 'get_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
} 

    // update a user
    updateUser = () => {
        let params = {
            "key": 'id',
            "value": 1,
            params: {
                "name": "xyz user",
                "job": "xyz resident"
            }
        }

        CoreHttpService.request('users', 'update_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    // delete a user
    deleteUser = () => {
        let params = {
            "key": 'id',
            "value": 1,
        }

        CoreHttpService.request('users', 'delete_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    // creating new user using Redux-Thunk
    addNewUser = () => {
        let data = {
            "name": "muhammad awais",
            "job": "developer"
        }

        this.props.submit(
            data
        );
    }

    // update a user using Redux-Thunk
    updateTheUser = () => {
        let params = {
            "key": 'id',
            "value": 1,
            params: {
                "name": "xyz user",
                "job": "xyz job"
            }
        }

        this.props.update(
            params
        );
    }

    render() {
        console.log("this.props.Users : ",this.props.Users);
        console.log("this.props.Products : ",this.props.Products);
        
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

                <div className="container">
                    <div class="content menu-list menu-list-full">
                        <div class="row gutter-md">
                            <div class="col-sm-12 col-md-12">
                                <div class="menu-list-title">
                                    <h2>Tasty</h2>
                                    <h3>Menu</h3>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <ul>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">crab cakes <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$18.50</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Whitebait & dill mayo <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$12.00</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Fish / Lemon / Mayo / Fennel seeds</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Watermelon & feta salad <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$11.50</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Halloumi with griddled vegetables <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$9.00</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Asparagus & halloumi salad <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$4.50</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Smoked streaky bacon / Frozen peas / Fresh chervil</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <ul>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Chilled pea & chervil soup <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$18.50</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Aubergine dip <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$12.00</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Fish / Lemon / Mayo / Fennel seeds</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Simple sushi salad <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$11.50</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Beef & barley bun with horseradish <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$9.00</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="price-item-main">
                                            <h4 class="list-item-title">Chicken wings, agrodolce style <small>(250 g)</small></h4>
                                            <div class="price-list-dotted-separator"></div>
                                            <div class="list-item-price">$4.50</div>
                                        </div>
                                        <div class="price-item-desc">
                                            <p>Smoked streaky bacon / Frozen peas / Fresh chervil</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-12 col-md-12">
                                <div class="height-of-menu-list"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Users: state.task.Users,
    Products: state.task.Products
});

const mapDispacthToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(AddUser(data))
        },
        update: (data) => {
            dispatch(UpdateUser(data))
        }
    };
};
// export default withStyles(styles)(ProductList);
export default connect(
    mapStateToProps,
    mapDispacthToProps
)(Home);
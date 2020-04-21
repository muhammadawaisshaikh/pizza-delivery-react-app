import React from 'react';
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
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Homepage Component</h1>
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
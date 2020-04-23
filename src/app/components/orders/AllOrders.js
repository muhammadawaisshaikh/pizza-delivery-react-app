import React from 'react';
import './orders.css';

import { connect } from "react-redux";

import CoreHttpService from '../../core/config/CoreHttpHandler';

class AllOrders extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        orders: this.props.Orders.data.orders
      }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div classNameName="container">
                    <div className="content menu-list menu-list-full">
                        <div className="row gutter-md">
                            <div className="col-sm-12 col-md-12">
                                <div className="menu-list-title">
                                    <h2>All Orders</h2>
                                    <h3>Admin View</h3>
                                </div>
                            </div>
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.orders.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th>{item.id}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.mobile}</td>
                                                        <td>${item.total}</td>
                                                        <td>{item.created_at}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Orders: state.task.Orders
});

const mapDispacthToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    null
)(AllOrders);
// export default AllOrders;
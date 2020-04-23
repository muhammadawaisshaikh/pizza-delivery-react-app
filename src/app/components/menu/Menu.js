import React from 'react';
import './menu.css';

import { connect } from "react-redux";
import CoreHttpService from '../../core/config/CoreHttpHandler';

class Menu extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          products: this.props.Products.data.products
      }
    }

    componentDidMount() {
        console.log("this.props.Products : ", this.props.Products);
    }

    render() {
        return (
            <div>
                <div classNameName="container">
                    <div className="content menu-list menu-list-full">
                        <div className="row gutter-md">
                            <div className="col-sm-12 col-md-12">
                                <div className="menu-list-title">
                                    <h2>Tasty</h2>
                                    <h3>Menu</h3>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <ul>
                                    {
                                        this.state.products.map((item, i) => {
                                            if (i < 5) {
                                                return (
                                                    <li key={i}>
                                                        <div className="price-item-main">
                                                            <h4 className="list-item-title">{item.name} <small>(250 g)</small></h4>
                                                            <div className="price-list-dotted-separator"></div>
                                                            <div className="list-item-price">$4.50</div>
                                                        </div>
                                                        <div className="price-item-desc">
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <a className="btn-default py-2 px-3">Add To Cart</a>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <ul>
                                {
                                    this.state.products.map((item, i) => {
                                        if (i>=5 && i <= 10) {
                                            return (
                                                <li key={i}>
                                                    <div className="price-item-main">
                                                        <h4 className="list-item-title">{item.name} <small>(250 g)</small></h4>
                                                        <div className="price-list-dotted-separator"></div>
                                                        <div className="list-item-price">$4.50</div>
                                                    </div>
                                                    <div className="price-item-desc">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <a className="btn-default py-2 px-3">Add To Cart</a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className="height-of-menu-list"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Products: state.task.Products
});

const mapDispacthToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    null
)(Menu);

// export default Menu;
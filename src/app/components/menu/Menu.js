import React from 'react';
import './menu.css';

import { connect } from "react-redux";
import CoreHttpService from '../../core/config/CoreHttpHandler';

class Menu extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          products: this.props.Products.data.products,
          types: this.props.Types.data.types,
      }
    }

    componentDidMount() {
        console.log("this.props.Products : ", this.props.Products);
        console.log("this.props.Types : ", this.props.Types);
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
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        this.state.products.map((item, i) => {
                                            return (
                                                <div className="col-md-4 mt-5" key={i}>
                                                    <div className="price-item-main">
                                                        <h4 className="list-item-title">{item.name}</h4>
                                                        <div className="price-list-dotted-separator"></div>
                                                    </div>
                                                    <div className="price-item-desc mb-2">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <select className="mb-3 btn-default">
                                                        {
                                                            this.state.types.map((type, i) => {
                                                                if (item.id == type.product_id) {
                                                                    return (
                                                                        <option key={i}>{type.name} - ${type.amount}</option>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </select>
                                                    <p><a className="btn-default py-2 px-3">Add To Cart</a></p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Products: state.task.Products,
    Types: state.task.Types,
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
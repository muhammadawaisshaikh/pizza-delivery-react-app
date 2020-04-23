import React from 'react';
import { Link } from "react-router-dom";
import './booking.css';

import CoreHttpService from '../../core/config/CoreHttpHandler';

class Cart extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        cart: JSON.parse(localStorage.getItem('cart')),
        total: 0
      }
    }

    componentDidMount() {
        if (this.state.cart && this.state.cart.length >0) {
            this.calTotal();
        }
    }

    calTotal = () => {
        var total = 0;

        this.state.cart.forEach((element, i) => {
            total = total+element.tamount;
        });

        this.setState({
            total: total
        })

        console.log(this.state.total);
    }

    inputHandler = (event) => {
        console.log(event.target.value);
        
        this.state.cart.forEach((element, i) => {
            if (element.id == event.target.name) {

                let addItem = {
                    id: element.id,
                    name: element.name,
                    description: element.description,
                    image: element.image,
                    type: element.type,
                    amount: element.amount,
                    tamount: element.amount*event.target.value,
                    qty: event.target.value
                }

                this.state.cart.splice(i, 1);
                console.log(this.state.cart);

                this.state.cart.push(addItem);

                console.log(this.state.cart);

                localStorage.setItem('cart', JSON.stringify(this.state.cart));
                
            }

            this.calTotal();

        });
    }

    removeItem = (id) => {
        this.state.cart.forEach((element, i) => {
            if (element.id == id) {

                this.state.cart.splice(i, 1);
                console.log(this.state.cart);

                localStorage.setItem('cart', JSON.stringify(this.state.cart));
                
            }
        });
        this.calTotal();
    }

    render() {
        
        return (
            <div>
                <div className="content inner-pg cart-pg clearfix">
                    <div className="container">

                        {
                            this.state.cart && this.state.cart.length >0 ?
                                <article>
                                <header className="cart-header">
                                    <h2>Cart</h2>
                                </header>
                                <form className="woocommerce-cart-form">
                                    <div className="table-responsive">
                                        <table className="table cart-table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="product-remove">&nbsp;</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.cart.map((item, i) => {
                                                        return (
                                                            <tr className="cart-item" key={i}>
                                                                <td className="product-remove">
                                                                    <a onClick={() => {this.removeItem(item.id)}} className="remove"></a>
                                                                </td>
                                                                <td className="product-name">
                                                                    {item.name}
                                                                </td>
                                                                <td className="product-price">
                                                                    <span>{item.amount}</span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <div className="quantity">
                                                                        <input type="number" name={`${item.id}`} className="input-text qty text" onChange={(e) => {this.inputHandler(e)}} />
                                                                    </div>
                                                                </td>
                                                                <td className="product-subtotal">
                                                                    <span>{item.tamount}</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                                <div className="cart-collaterals">
                                    <div className="row">
                                        <div className="col-sm-push-4 col-sm-8 col-md-push-6 col-md-6 col-lg-4 col-lg-push-8">
                                            <div className="cart-totals calculated-shipping">
                                                <h2>Cart totals</h2>
                                                <table className="shop-table shop-table-responsive">
                                                    <tbody>
                                                        <tr className="order-total">
                                                            <th>Total</th>
                                                            <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{this.state.total}</span></strong> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="proceed-to-checkout">
                                                    <Link className="btn btn-default" to="/checkout">checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            :
                            <article>
                                <header className="cart-header">
                                    <h2>No items in cart</h2>
                                </header>
                            </article>
                        }
                        

                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
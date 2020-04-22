import React from 'react';
import './booking.css';

import CoreHttpService from '../../core/config/CoreHttpHandler';

class Cart extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        
        return (
            <div>
                <div class="content inner-pg cart-pg clearfix">
                    <div class="container">
                        <article>
                            <header class="cart-header">
                                <h2>Cart</h2>
                            </header>
                            <form class="woocommerce-cart-form">
                                <div class="table-responsive">
                                <table class="table cart-table table-hover">
                                    <thead>
                                        <tr>
                                            <th class="product-remove">&nbsp;</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="cart-item">
                                            <td class="product-remove">
                                                <a href="#" class="remove"></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="#">Apple cider sauce and pork loin chops</a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span>$15.90</span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">
                                                    <input type="number" class="input-text qty text" value="1"/>
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span>$15.90</span>
                                            </td>
                                        </tr>
                                        <tr class="cart-item">
                                            <td class="product-remove">
                                                <a href="#" class="remove"></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="#">Apple cider sauce and pork loin chops</a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span>$15.90</span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">
                                                    <input type="number" class="input-text qty text" value="1"/>
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span>$15.90</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </form>
                            <div class="cart-collaterals">
                                <div class="row">
                                    <div class="col-sm-push-4 col-sm-8 col-md-push-6 col-md-6 col-lg-4 col-lg-push-8">
                                        <div class="cart-totals calculated-shipping">
                                            <h2>Cart totals</h2>
                                            <table class="shop-table shop-table-responsive">
                                                <tbody>
                                                    <tr class="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td data-title="Subtotal">
                                                            <span class="woocommerce-Price-amount amount">$15.90</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="order-total">
                                                        <th>Total</th>
                                                        <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>15.90</span></strong> </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="proceed-to-checkout">
                                                <a href="#" class="btn btn-default">checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
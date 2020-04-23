import React from 'react';
import './booking.css';

import CoreHttpService from '../../core/config/CoreHttpHandler';

class Checkout extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
          cart: JSON.parse(localStorage.getItem('cart')),
          total: 0,
          name: '',
          email: '',
          mobile: '',
          address: '',
          ordered_products: localStorage.getItem('cart'),
          success: false
        }
      }

    componentDidMount() {
        if (this.state.cart && this.state.cart.length >0) {
            this.getData();
        }
    }

    getData() {
        this.total = 0;

        this.state.cart.forEach((element, i) => {
            this.total = this.total + parseInt(element.tamount) ;
        });

        this.setState({total: this.total});
        console.log(this.total);
        
    }

    inputHandler = (event) => {
        if (event.target.name == 'name') this.setState({name: event.target.value})
        if (event.target.name == 'email') this.setState({email: event.target.value})
        if (event.target.name == 'mobile') this.setState({mobile: event.target.value})
        if (event.target.name == 'address') this.setState({address: event.target.value})
    }

    orderNow() {
        console.log(this.state);

        CoreHttpService.request('orders', 'create_order', this.state, (response) => {
            console.log(response);
            
            if (response.statusText == "Created") {
                this.setState({ success: true });
                localStorage.removeItem('cart');
            }
        }, (error) => {
            console.log(error);
        });
    }


    render() {
        
        return (
            <div>
                {
                    !this.state.success ?
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
                                                        <input type="text" name="name" class="form-control" onChange={(e) => {this.inputHandler(e)}} />
                                                    </div>
                                                </div>

                                                <div class="col-sm-4 col-md-4">
                                                    <div class="form-group">
                                                        <label>email</label>
                                                        <input type="email" name="email" class="form-control" onChange={(e) => {this.inputHandler(e)}} />
                                                    </div>
                                                </div>

                                                <div class="col-sm-4 col-md-4">
                                                    <div class="form-group">
                                                        <label>mobile</label>
                                                        <input type="text" name="mobile" class="form-control" onChange={(e) => {this.inputHandler(e)}} />
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-12">
                                                    <div class="form-group">
                                                        <label>Address</label>
                                                        <input type="text" name="address" class="form-control" onChange={(e) => {this.inputHandler(e)}} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="send-message text-center">
                                                <a onClick={()=>{this.orderNow()}} class="btn-default">Order Now</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <header className="cart-header" style={{padding: '100px'}}>
                        <h2>Order Successfull</h2>
                    </header>
                }
            </div>
        );
    }
}

export default Checkout;
import React from 'react';
import './menu.css';

import CoreHttpService from '../../core/config/CoreHttpHandler';

class Menu extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        
        return (
            <div>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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
                                        <a className="btn-default py-2 px-3">Add To Cart</a>
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

export default Menu;
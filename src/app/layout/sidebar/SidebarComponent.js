import React from 'react';
import { Link } from "react-router-dom";
import AppRoutes from '../AppRoutes';

import Logo from '../../assets/img/logo.png';
import Cart from '../../assets/img/cart.png';

const _routes = AppRoutes.registeredRoutes();

export default function Sidebar() {
    return (
        <div>

            {/* {
                _routes.map((item, i) => {
                    const _routeItem = AppRoutes.getRoute(item);
                    const itemKey = `${item}_${i}`;
        
                    if (_routeItem.name) {
                        return (
                            <Link key={itemKey} to={_routeItem.path} style={{padding: 10}}>
                                {_routeItem.name}
                            </Link>
                        );
                    }
                })
            } */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-3">
                            <img style={{padding: '10px 0'}} src={Logo} />
                        </div>
                        <div className="col-8">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    {
                                        _routes.map((item, i) => {
                                            const _routeItem = AppRoutes.getRoute(item);
                                            const itemKey = `${item}_${i}`;
                                
                                            if (_routeItem.name) {
                                                return (
                                                    <li key={itemKey} className="nav-item active">
                                                        <Link className="nav-link" to={_routeItem.path}>{_routeItem.name}</Link>
                                                    </li>
                                                );
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <Link to="/cart">
                                <div className="cart-btn">
                                    <img src={Cart} />
                                    <span>3</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}
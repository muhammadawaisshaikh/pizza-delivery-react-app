import NotFoundPage from './404-page/NotFoundPageComponent';
import Login from '../components/auth/LoginComponent';
import Homepage from '../components/homepage/Homepage';
import Menu from '../components/menu/Menu';
import Checkout from '../components/booking/Checkout';
import Cart from '../components/booking/Cart';
import AllOrders from '../components/orders/AllOrders';

const APP_ROUTES = {
    notFound: {
        path: '/not-found',
        protected: false,
        icon: null,
        component: NotFoundPage,
    },
    default: {
        path: '/',
        icon: null,
        component: Homepage,
        default: true,
    },
    homepage: {
        path: '/homepage',
        name: 'Homepage',
        protected: false,
        icon: null,
        component: Homepage
    },
    orders: {
        path: '/orders',
        name: 'Orders',
        protected: false,
        icon: null,
        component: AllOrders
    },
    menu: {
        path: '/menu',
        name: 'Menu',
        protected: false,
        icon: null,
        component: Menu
    },
    cart: {
        path: '/cart',
        name: 'Cart',
        protected: false,
        icon: null,
        component: Cart
    },
    checkout: {
        path: '/checkout',
        protected: false,
        icon: null,
        component: Checkout
    }
    
};
class AppRoutes {
    registeredRoutes() {
        return Object.keys(APP_ROUTES);
    }
    
    getRoute(name) {
        if (APP_ROUTES[name]) return APP_ROUTES[name];

        throw new Error(`Invalid route name [${name}]`);
    }
}
export default new AppRoutes;
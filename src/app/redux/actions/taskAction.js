import {
    GET_PRODUCTS,
    GET_TYPES,
    GET_ORDERS
  } from "./actions";

import CoreHttpService from '../../core/config/CoreHttpHandler';

export const GetProducts = () => {
    console.log("GetProducts");
    
    return dispatch => {
        console.log("GetProducts dispatch");

        let params = {
            id: 1
        }

        CoreHttpService.request('products', 'listing', params, (response) => {
            console.log(response);

            dispatch({
                type: GET_PRODUCTS,
                products: response
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};

export const GetTypes = () => {
    console.log("GetTypes");
    
    return dispatch => {
        console.log("GetTypes dispatch");

        let params = {
            id: 1
        }

        CoreHttpService.request('types', 'listing', params, (response) => {
            console.log(response);

            dispatch({
                type: GET_TYPES,
                types: response
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};

export const GetOrders = () => {
    console.log("GetOrders");
    
    return dispatch => {
        console.log("GetOrders dispatch");

        let params = {
            id: 1
        }

        CoreHttpService.request('orders', 'listing', params, (response) => {
            console.log(response);

            dispatch({
                type: GET_ORDERS,
                orders: response
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};
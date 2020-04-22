import {
    GET_PRODUCTS,
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
                users: response
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};
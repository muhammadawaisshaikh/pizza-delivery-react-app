import {
    GET_PRODUCTS,
    GET_TYPES,
    GET_ORDERS
  } from "../actions/actions";
  
  const INITIAL_STATE = {
    Products: [],
    Types: [],
    Orders: [],
    loading : false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    //  console.log("task reducer"  , action);
  
    switch (action.type) {
      case GET_PRODUCTS: {
        return {
          ...state,
          Products: action.products,
          loading: false
        };
      }
      case GET_TYPES: {
        return {
          ...state,
          Types: action.types,
          loading: false
        };
      }
      case GET_ORDERS: {
        return {
          ...state,
          Orders: action.orders,
          loading: false
        };
      }
      default:
        return state;
    }
  };
  
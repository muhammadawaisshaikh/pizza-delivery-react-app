import {
    GET_PRODUCTS
  } from "../actions/actions";
  
  const INITIAL_STATE = {
    Products: [],
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
      default:
        return state;
    }
  };
  
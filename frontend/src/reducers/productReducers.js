import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = { loading: true, products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
        return { loading: false, products: action.payload };
        case PRODUCT_CREATE_FAIL:
          return { loading: false, error: action.payload };
    default:
      return state
  }
};
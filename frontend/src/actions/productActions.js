import axios from "axios";
import { PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_LIST_REQUEST } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST
  });
  try {
    const { data } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch(error){
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.message });
  }
};
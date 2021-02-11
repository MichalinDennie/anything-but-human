import Axios from "axios"
import { CART_ADD_ITEMS } from "../../Constants/CartConstant";

export const addToCart = (product_id, qty) => async (dispatch, getState) => {
       // const { data } = await Axios.get(`/add-to-cart/${product_id}`);
       dispatch({
              type: CART_ADD_ITEMS,
              payload: {
                     name: 'text',
                     image: 'textImage',
                     price: '$213',
                     product: 'heavy',
                     qty,
              }
       })
       console.log(product_id, qty)
}
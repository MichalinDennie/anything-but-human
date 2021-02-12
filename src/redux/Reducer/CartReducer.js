// import { CART_ADD_ITEMS } from '../../Constants/CartConstant'

// export const cartReducer = (state = { cartItems: [] }, action) => {
//        console.log(action.payload.name)
//        switch (action.type) {
//               case CART_ADD_ITEMS:
//                      const item = action.payload;
//                      const existItems = state.cartItems.find(x => x.product == item.product)
//                      if (existItems) {
//                             return {
//                                    ...state,
//                                    cartItems: state.cartItems.map((e) => { e.product == existItems.product ? item : x }),
//                             }
//                      } else {
//                             return {
//                                    ...state,
//                                    cartItems: [...state.cartItems, item]
//                             }
//                      }
//               default:
//                      return state;
//        }
// }  
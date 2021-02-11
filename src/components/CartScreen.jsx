import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/Action/action'
import '../Styles/CartScreen.css'


export default function CartScreen(props) {
       // console.log(props.match.params)
       const productId = props.match.params.id;
       const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

       const dispatch = useDispatch();

       useEffect(() => {
              if (productId) {
                     dispatch(addToCart(productId, qty));
              }

       }, [dispatch, productId, qty]);

       return (
              <div className="cartContainer">
                     {/* <div className="cartHeader"> */}
                     <h1 className="herdingtxt">Shopping Cart</h1>
                     {/* </div>
                     <div className="bodyOfCart">
                            <div className="contentOfProduct">
                                   <p>S.No</p>
                                   <p>{productId}</p>
                            </div>
                     </div> */}
                     <p>ADD TO CART : Product ID : {productId}, Qty : {qty} </p>
              </div>
       )
}

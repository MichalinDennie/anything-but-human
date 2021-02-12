// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// // import { useDispatch } from "react-redux";
// // import { addToCart } from '../redux/Action/action'
// import '../Styles/CartScreen.css'

// function CartScreen(props) {
//        // console.log(props.match.params)
//        const productId = props.match.params.id;
//        const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

//        // const dispatch = useDispatch();

//        useEffect(() => {
//               // if (productId) {
//               //        dispatch(addToCart(productId, qty));
//               // }
//               props.CallingFunc(productId, qty)
//        }, [productId, qty]);

//        return (
//               <div className="cartContainer">
//                      {/* <div className="cartHeader"> */}
//                      <h1 className="herdingtxt">Shopping Cart</h1>
//                      {/* </div>
//                      <div className="bodyOfCart">
//                             <div className="contentOfProduct">
//                                    <p>S.No</p>
//                                    <p>{productId}</p>
//                             </div>
//                      </div> */}
//                      <p>ADD TO CART : Product ID : {productId}, Qty : {qty} </p>
//               </div>
//        )
// }
// // console.log(props.match.params.id)
// // console.log(props.productId)
// // const mapDispatchToProp = (dispatch) => ({
// //        CallingFunc: (productId, qty) => dispatch(addToCart(productId, qty))
// // })

// // export default connect(null, mapDispatchToProp)(CartScreen)
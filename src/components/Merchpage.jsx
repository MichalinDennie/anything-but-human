import React from 'react'
import Logo from "../Images/LogoImage.png";
import { BrowserRouter, Route } from "react-router-dom"
import { connect } from "react-redux";
// import ProductScreen from './ProductOverView';
import Products from './Products';


function Merchpage(props) {

       return (
              <div className="MerchContent">
                     <div className="headerImageLogo">
                            <img src={Logo} className="imagebanner" alt="" />
                     </div>
                     <div className="MerchHeading">
                            <h1 className="MerchHeadingText">Merch</h1>
                     </div>

                     <div className="productCardMainContainer">
                            <div className="productContentContainer">

                                   {props.products.map((data) => {
                                          return (
                                                 <Products key={data.id} data={data} />
                                          )
                                   })}
                            </div>
                     </div>
              </div>
       )
}
const mapStateToProps = (state) => ({
       products: state.productState.products
})

export default connect(mapStateToProps, null)(Merchpage)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../Styles/Merch.css'
// import image from '../Images/productImage.jpg'

export default function Merch(props) {
       // console.log(props.image)
       return (
              <div className="MerchContainer" id="merch">
                     <div className="MerchHeading">
                            <h1 className="MerchHeadingText">Merch</h1>
                     </div>

                     <div className="productCardMainContainer">
                            <div className="productContentContainer">
                                   <div className="productCards">
                                          <div className="imageSide">
                                                 <img src="#" className="image" alt="" />
                                          </div>
                                          <div className="nameSide">
                                                 <h3>firstProduct</h3>
                                          </div>
                                          <div className="priceSide">
                                                 $40
                                          </div>
                                          <Link className="buyBtn" to={`/product/1`}>Buy Now</Link>
                                   </div>
                            </div>
                            <div className="ViewAllBtn">
                                   <Link to="/merch-page" className="viewAll">View All</Link>
                            </div>
                     </div>
              </div>
       )
}
// const mapStateToProps = (state) => ({
//        product1: state.productState.products[0],
//        product2: state.productState.products[1],
//        product3: state.productState.products[2]
// })

// export default connect(mapStateToProps, null)(Merch)

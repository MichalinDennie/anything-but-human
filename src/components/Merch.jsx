import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../Styles/Merch.css'
// import image from '../Images/productImage.jpg'

function Merch(props) {
       console.log(props.name)
       return (
              <div className="MerchContainer" id="merch">
                     <div className="MerchHeading">
                            <h1 className="MerchHeadingText">Merch</h1>
                     </div>

                     <div className="productCardMainContainer">
                            <div className="productContentContainer">
                                   <div className="productCards">
                                          <div className="imageSide">
                                                 <img src={props.name} className="image" alt="" />
                                          </div>
                                          <div className="nameSide">
                                                 <h3>This is first Product</h3>
                                          </div>
                                          <div className="priceSide">
                                                 $40
                                          </div>
                                          <Link className="buyBtn" to="/">Buy Now</Link>
                                   </div>
                                   <div className="ViewAllBtn">
                                          <Link to="/merch-page" className="viewAll">View All</Link>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
const mapStateToProps = (state) => ({
       name: state.productState.products[0].image
})

export default connect(mapStateToProps, null)(Merch)

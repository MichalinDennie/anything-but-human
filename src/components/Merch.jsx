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
                                                 <img src="https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%207..png?alt=media&token=20964b30-6cb3-4718-8e49-f3243cadc2b0" className="image" alt="" />
                                          </div>
                                          <div className="nameSide">
                                                 <h3>firstProduct</h3>
                                          </div>
                                          <div className="priceSide">
                                                 $40
                                          </div>
                                          <Link className="buyBtn" to={`/product/1`}>Buy Now</Link>
                                   </div>
                                   <div className="productCards">
                                          <div className="imageSide">
                                                 <img src="https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2010..png?alt=media&token=2ec6041a-a979-456d-813c-ad6ba3e5ff04" className="image" alt="" />
                                          </div>
                                          <div className="nameSide">
                                                 <h3>SecondProduct</h3>
                                          </div>
                                          <div className="priceSide">
                                                 $42
                                          </div>
                                          <Link className="buyBtn" to={`/product/2`}>Buy Now</Link>
                                   </div>
                                   <div className="productCards">
                                          <div className="imageSide">
                                                 <img src="https://firebasestorage.googleapis.com/v0/b/bandproject-e8825.appspot.com/o/t-shirt%2011..png?alt=media&token=a1643278-5e0b-4531-a50a-fcd7a907a5a9" className="image" alt="" />
                                          </div>
                                          <div className="nameSide">
                                                 <h3>ThirdProduct</h3>
                                          </div>
                                          <div className="priceSide">
                                                 $45
                                          </div>
                                          <Link className="buyBtn" to={`/product/3`}>Buy Now</Link>
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

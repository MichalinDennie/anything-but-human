import React, { useState } from 'react'
import '../Styles/OverviewPage.css'
import { connect } from 'react-redux';
import Footer from './Footer';
import Home from './Home';

function ProductOverView(props) {
       const [qty, setQty] = useState(1)

       const productID = props.match.params.id;
       const data = props.product;
       const Product = data.find((e) => e.id == props.match.params.id);
       if (!Product) {
              return (
                     <div className="error"><h3 className="errorHeading" >Product not found</h3></div>
              )
       }

       const cartHandler = () => {
              props.history.push(`/cart/${productID}?qty=${qty}`)
       }

       return (
              <>
                     <Home />
                     <div className="OverviewContent">
                            <div className="imagediv">
                                   <img src={Product.image} alt="" className="OverViewImage" />
                            </div>
                            <div className="productInfo col-6" >
                                   <h3 className="OverviewHeading">
                                          {Product.name}
                                   </h3>
                                   <p className="OverviewPrice">$ {Product.price}.00</p>
                                   <select placeholder="Size" className="OverviewSize">
                                          <option className="OverviewOptions" value="Small">Small</option>
                                          <option className="OverviewOptions" value="Medium">Medium</option>
                                          <option className="OverviewOptions" value="Large">Large</option>
                                          <option className="OverviewOptions" value="XL">XL</option>
                                   </select>
                                   <div className="stockIndicator">
                                          <h5>Availibility :<span className="IndicatorText">In Stock</span> </h5>
                                   </div>
                                   <br />
                                   <select className="OverviewQuantity" value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                          <option className="OverviewOptions" value="1">1</option>
                                          <option className="OverviewOptions" value="2">2</option>
                                          <option className="OverviewOptions" value="3">3</option>
                                          <option className="OverviewOptions" value="4">4</option>
                                          <option className="OverviewOptions" value="5">5</option>
                                          <option className="OverviewOptions" value="6">6</option>
                                          <option className="OverviewOptions" value="7">7</option>
                                          <option className="OverviewOptions" value="8">8</option>
                                          <option className="OverviewOptions" value="9">9</option>
                                          <option className="OverviewOptions" value="10">10</option>
                                   </select>
                                   <button onClick={cartHandler} className="addCart">Add To Cart</button>
                            </div>
                     </div>
                     <Footer />
              </>
       )
}
const mapStateToProps = (state) => ({
       product: state.productState.products
})


export default connect(mapStateToProps, null)(ProductOverView);
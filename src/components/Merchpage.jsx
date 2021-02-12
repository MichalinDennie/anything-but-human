import React, { useEffect, useState } from 'react'
import '../Styles/MerchPage.css'
import Logo from "../Images/LogoImage.png";
import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux";
// import axios from 'axios'
import Products from './Products';
import Footer from './Footer';
import { listProducts } from '../redux/Action/action';
// import products from './Products';


export default function Merchpage(props) {

       const dispatch = useDispatch();
       const ProductList = useSelector((state) => state.productList)
       // const products = ProductList;
       console.log(ProductList)
       // useEffect(() => {
       //        // const fetchData = async () => {
       //        //        const { data } = await axios.get('/api/product')
       //        //        setProducts(data);
       //        // }
       //        // fetchData();
       //        dispatch(listProducts())
       // }, [dispatch])
       console.log(props.products)
       return (
              <>
                     <div className="MerchContent">
                            <div className="navigationbar" style={{ display: 'flex', justifyContent: 'center' }}>
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" to="/news-page">News</Link>
                                   </button>
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" to="/">Music</Link>
                                   </button>
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" to="/">Videos</Link>
                                   </button>
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" to="/merch-page">Merch</Link>
                                   </button>
                            </div>
                            <div className="headerImageLogo">
                                   <img src={Logo} className="imagebanner" alt="" />
                            </div>
                            <div className="MerchHeading">
                                   <h1 className="MerchHeadingText">Merch</h1>
                            </div>

                            <div className="productCardMainContainer">
                                   <div className="productContentContainer">
                                          {/* {products.map((data) => {
                                                 return (
                                                        <Products key={data.id} data={data} />
                                                 )
                                          })} */}
                                   </div>
                            </div>
                     </div>
                     <Footer />
              </>
       )
}
// const mapStateToProps = (state) => ({
//        products: state.productList
// })

// export default connect(mapStateToProps, null)(Merchpage)
import React from 'react'
import { connect } from 'react-redux';
import products from './Products';

function AddtwoCart(props) {
       const data = props.product;
       console.log(data)
       const Product = data.find((e) => e.id == props.match.params.id);
       if (!Product) {
              return (
                     <div className="error"><h3 className="errorHeading" >Product not found</h3></div>
              )
       }
       return (

              <>

              </>
       )
}

const mapStateToProps = (state) => ({
       product: state.productState.products
})


export default connect(mapStateToProps, null)(AddtwoCart);
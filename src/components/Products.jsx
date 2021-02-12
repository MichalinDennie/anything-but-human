import React from 'react'
import { Link } from 'react-router-dom';

export default function Products(props) {
       const { data } = props;
       return (
              <div className="productCards">
                     <div className="imageSide">
                            <Link className="textStyle" to={`/product/${data.id}`}>
                                   <img src={data.image} className="image" alt="" />
                            </Link>
                     </div>
                     <div className="nameSide">
                            <Link className="textStyle" to={`/product/${data.id}`}>
                                   <h3 className="nameOfProduct">{data.name}</h3>
                            </Link>
                     </div>
                     <div className="priceSide">
                            ${data.price}
                     </div>
                     <Link className="buyBtn" to={`/product/${data.id}`}>Buy Now</Link>
              </div>
       )
}

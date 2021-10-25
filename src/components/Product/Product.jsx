import React from 'react'
import './style.css'

function Product(props) {
  return (
    <div className="product">
      <div className="product-image">
        <p>{props.productImg}</p>
      </div>
      <p className="product-name">{props.productName}</p>
      <p className="product-description" >{props.productDescription}</p>
        <ol>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ol>

      <a href="#">Ver solução</a>      
    </div>
  )
}

export default Product


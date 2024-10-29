import React from 'react'
import './IceCreamBox.css';
const IceCreamBox = (props) => {
  return (
    <div className="ice-cream-container" id='flavors'>
    <div className='ice-cream-box'>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
      <p>${props.price}</p>
      <button>Add to Cart</button>
    </div>
    </div>
  )
}

export default IceCreamBox

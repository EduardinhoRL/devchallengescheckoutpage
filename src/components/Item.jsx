import React, { useState, useEffect } from 'react'

import styled from 'styled-components'


const Wrapperdetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info {
    display: grid;
    gap: 12px;

    .name_product {
      color: var(--gray_title);
      font-weight: bold;
    }

    .prices {  
      display: flex;
      align-items: center;
      font-weight: bold;
      
      span:nth-child(1) {
        color: var(--orange);
        margin-right: 10px;
      }

      span:nth-child(2) {
        color: var(--gray_title);
        text-decoration: line-through;
        font-size: 12px;
      }
    }
  }
`

const Quantity = styled.div`
  padding: 13px;
  border: 1px solid var(--gray);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 135px;
  
  button {
    width: 21px;
    height: 21px;
    border: none;
    background: #E0E0E0;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    padding-top: 2px;

    span {
      pointer-events: none;
      font-size: 17px;
      color: var(--gray);
      font-weight: bold;
    }
 
  }

  .number {
    font-weight: bold;
    color: var(--gray2);
  }
`

const Item = ({ item, total, setTotal }) => {
   
  const {img, name, price1, price2} = item
  const [quantity, setQuantity] = useState(1) 

  const handleClick = e => {
    if(e.target.name === 'more') { 
      setQuantity(quantity + 1)  
        } else {
          if(quantity === 1){
            return
          } else {
            setQuantity(quantity-1) 
          } 
        } 
  }

  return ( 
    <div className="item">
      <img src={img} alt=""/>
      <Wrapperdetails> 
        <div className="info">
          <span className="name_product">{name}</span>

          <div className="prices">
            <span>{price1}</span>
            <span>{price2}</span>
          </div>                                                                                            
        </div>

        <Quantity>
          <button onClick={handleClick} name="less"><span className="material-icons">horizontal_rule</span></button>
          <span className="number">{quantity}</span>
          <button onClick={handleClick} name="more"><span className="material-icons">add</span></button>
        </Quantity>
      </Wrapperdetails>
    </div>
   );
}
 
export default Item;
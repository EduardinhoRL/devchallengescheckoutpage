import React, {useState} from 'react'
import img1 from '../img/photo2.png'
import img2 from '../img/photo1.png'
import Item from './Item'

import styled from 'styled-components'

const Wrapperitems = styled.div`
  max-width: 465px;
  margin: var(--margin_center867);
  

  @media screen and (max-width: 867px) {
    order: -1;
  } 
`

const ItemsS = styled.div`
  background: var(--gray_bg);
  border-radius: 12px;
  padding: var(--padding_wrapper_items);
  display: grid;
  gap: 32px;

  .item {
    display: grid;
    gap: 21px;
    grid-template-columns: .8fr 1fr;

    img {
      width: 100%;
      border-radius: 13px;
    }
  }
`

const Totalprice = styled.div`
  margin-top: 87px;

  div {
    border-top: 1px solid #BDBDBD;
    font-weight: bold;
    line-height: 45px;
    color: var(--gray2);
    display: flex;
    justify-content: space-between;

    span:nth-child(1) {
      font-size: var(--font_shipping_total);
    }
    span:nth-child(2) {
      font-size: 14px;
    }
  }
`


const Items = () => {
  const [total, setTotal] = useState(148.98) 

  const shipping = 19;
  
  const items = [
    {id: 1, img:`${img2}`, name: 'Vintage Backbag', price1: 54.99, price2: 94.99},
    {id: 2, img:`${img1}`, name: 'Levi Shoes', price1: 74.99, price2: 124.99}
  ]

  return ( 
    <>
      <Wrapperitems>
        <ItemsS>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              total={total}
              setTotal={setTotal}
            />
          ))}

          <Totalprice>
            <div>
              <span>Shipping</span> <span>${shipping}</span>
            </div>
            <div>
              <span>Total</span> <span>${total.toFixed(2)}</span>
            </div>
          </Totalprice>
        </ItemsS>
            
      </Wrapperitems>
    </>
   );
}
 
export default Items;
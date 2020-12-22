import React, {useState} from 'react'
import img1 from '../img/photo2.png'
import img2 from '../img/photo1.png'
import Item from './Item'

import styled from 'styled-components'

const Wrapperitems = styled.div`
  

`

const ItemsS = styled.div`
  background: var(--gray_bg);
  border-radius: 12px;
  padding: 33px 29px 10px 29px;
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

  div {
    border-top: 1px solid #BDBDBD;
    font-weight: bold;
    line-height: 45px;
    color: var(--gray2);
    display: flex;
    justify-content: space-between;

    span:nth-child(1) {
      font-size: 18px;
    }
    span:nth-child(2) {
      font-size: 14px;
    }
  }
`


const Items = () => {
  const [total, setTotal] = useState(0)
  const [priceproducts, setpriceproducts]  = useState(0)

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
              setpriceproducts={setpriceproducts}
            />
          ))}

          <Totalprice>
            <div>
              <span>Shipping</span> <span>$19</span>
            </div>
            <div>
              <span>Total</span> <span>$148.98</span>
            </div>
          </Totalprice>
        </ItemsS>
            
      </Wrapperitems>
    </>
   );
}
 
export default Items;
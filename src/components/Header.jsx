import React from 'react'

import styled from 'styled-components'
 
const Title = styled.h1`
  color: #4E5150;
  font-size: var(--font_title_page);
  max-width: 465px;
  margin: var(--margin_center867);
` 

const Header = () => {
  return ( 
    <Title>Checkout</Title>
   );
}
 
export default Header; 
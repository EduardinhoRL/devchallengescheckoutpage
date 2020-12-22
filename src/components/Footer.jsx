import React from 'react'

import styled from 'styled-components'

const FooterS = styled.footer`
  margin-top: 166px;

  span {
    display: block;
    text-align: center;
  }
`

const Footer = () => {
  return ( 
    <FooterS>
      <span>Eduardinhorl @ DevChallenges.io</span>
    </FooterS>
   );
}
 
export default Footer;
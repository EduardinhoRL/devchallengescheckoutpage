import Header from './components/Header'
import ContactInformation from './components/ContactInformation'
import Items from './components/Items'
import Footer from './components/Footer'

import styled from 'styled-components'

const  Container = styled.div`
  width: 100%;
  max-width: 961px;
  margin: var(--margin_page);
  padding: 12px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 5vw;
  margin-top: var(--margin_top_content);

  @media screen and (max-width: 867px) {
    grid-template-columns:1fr; 
  }
`

function App() {
  return (
    <Container>
      <Header />
      <Grid>
        <ContactInformation />
        <Items />
      </Grid>
      <Footer />
    </Container> 
  );
}

export default App;

import Header from './components/Header'
import ContactInformation from './components/ContactInformation'
import Items from './components/Items'
import Footer from './components/Footer'

import styled from 'styled-components'

const  Container = styled.div`
  width: 100%;
  max-width: 961px;
  margin: 64px auto 17px auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 113px;
  margin-top: 50px;
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

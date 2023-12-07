import { Fragment } from 'react';

// Component Imports
import Container from 'react-bootstrap/Container';

import PromotionWindow from '../components/features/PromotionWindow';
import SaleProducts from '../components/features/products/SaleProducts';


const Home = () => {
  return (
    <Fragment>
      <Container>

        <PromotionWindow
          text="MASSIVE SALE ON NOW"
        />

        <SaleProducts/>


      </Container>
    </Fragment>
  )
}

export default Home
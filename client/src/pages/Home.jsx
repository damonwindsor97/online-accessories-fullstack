import { Fragment } from 'react';

// Component Imports
import Container from 'react-bootstrap/Container';

import PromotionWindow from '../components/features/PromotionWindow';
import SaleProducts from '../components/features/products/SaleProducts';
import OaBox from '../components/common/OaBox';


const Home = () => {
  return (
    <Fragment>
        <OaBox 
            link="Shop Here"
            linkTo="/store/products"
            title="OA"
            content="UPGRADE YOUR GAME"
            
          />
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
import { Fragment } from 'react';

// Component Imports
import Container from 'react-bootstrap/Container';

import OaBox from '../components/common/OaBox';
import PromotionWindow from '../components/features/PromotionWindow';
import ProductSelect from '../components/features/Selection';


const Home = () => {
  return (
    <Fragment>
      <Container>
        <OaBox 
          title="Online Accessories"
          content="Your electric one stop shop"
          link="Shop Now"
          linkTo="/store/products"
        />
        
        <PromotionWindow
          text="SALE ON 40 SERIES GRAPHICS CARDS"
        />

        <ProductSelect/>

      </Container>
    </Fragment>
  )
}

export default Home
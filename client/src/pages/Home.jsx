import { Fragment } from 'react';

// Component Imports
import Container from 'react-bootstrap/Container';

import OaBox from '../components/common/OaBox';
import PromotionWindow from '../components/features/PromotionWindow';
import ProductSelect from '../components/features/Selection';
import SaleProducts from '../components/features/products/SaleProducts';


const Home = () => {
  return (
    <Fragment>
      <Container>
        <OaBox 
          link=""
          linkTo="/store/products"
          
        />

        <PromotionWindow
          text="SALE ON 40 SERIES GRAPHICS CARDS"
        />

        <SaleProducts/>

        <ProductSelect/>

      </Container>
    </Fragment>
  )
}

export default Home
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import OaBox from '../components/common/OaBox';

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
      </Container>
    </Fragment>
  )
}

export default Home
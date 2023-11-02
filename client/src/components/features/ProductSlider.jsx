import { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

import ProductsList from "../../components/features/products/ProductsList"
import OaLoader from '../../components/common/OaLoader'
import OaBox from '../../components/common/OaBox'
import Container from 'react-bootstrap/Container';

const ProductSlider = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const effectRan = useRef(false);

    useEffect(() => {
    if(effectRan.current === false) {
        fetchProducts();
        setLoading(false);

        return () => {
        effectRan.current = true;
        }
    }
    }, [])

    async function fetchProducts() {
    try {
        // API Request
        const response = await axios.get('http://localhost:5000/api/products')
        // Store the response in data
        const data = response.data;

        console.log(data)
        setData(data)
    } catch (error) {
        console.log(error?.response)
        setError(true);
        toast.error("Internal server error")
    }
    }

    // CONDITIONAL LOAD: ERROR
    if (error) {
    return (
        <Container className='text-center mt-5'>
        <p>Error loading page...</p>

        </Container>
    )
    }

    // CONDITIONAL LOAD: LLOADING
    if (loading) {
    return (
        <Container className='text-center mt-4'>
        <OaLoader />
        </Container>
    )
    }



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
  return (
    <Container className='text-center mt-4'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <ProductsList products={data}/>
            </Carousel.Item>
            <Carousel.Item>
    
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
   
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>

  )
}

export default ProductSlider
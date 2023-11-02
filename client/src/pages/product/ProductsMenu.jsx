import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Container from "react-bootstrap/Container";

import ProductsList from "../../components/features/products/ProductsList"
import OaLoader from '../../components/common/OaLoader'
import OaBox from '../../components/common/OaBox'

function ProductsMenu() {
  // PRODUCTS STATE
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


 

  // PRODUCTS FUNCTIONS
  function handleAddProduct(name){
    const newProduct = {
      id: crypto.randomUUID(),
      name: name,
      image: `https://placehold.co/100x100/pink/darkblue?font=montserrat&text=${name}!`
    }
    setProducts(currentProducts => {
      return [...currentProducts, newProduct]
    })
    console.log("Product added to cart!")
  }

  function handleRemoveProduct(id){
    console.log(id)
    const updatedProducts = products.filter(product => product.id !== id)
    setProducts(updatedProducts)
  }

  return (
    <Container className='text-center mt-4'>
      <OaBox
        title="Get the latest hardware"
        content="Free Shipping with all orders"
      />
      <h1 className='mt-5'>Hardware Selection</h1>
      <ProductsList products={data}/>
    </Container>
  )
}

export default ProductsMenu
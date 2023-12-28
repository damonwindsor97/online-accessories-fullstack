import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Container, Form, InputGroup } from 'react-bootstrap';
import * as styles from './ProductMenu.css';

import ProductsList from '../../components/features/products/ProductsList';
import OaLoader from '../../components/common/OaLoader';
import OaButton from '../../components/common/OaButton';
import OaBox from '../../components/common/OaBox';



function ProductsMenu() {
  // PRODUCTS STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Change to true initially
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([])


  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      fetchProducts();
      setLoading(false);

      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error?.response);
      setError(true);
      toast.error('Internal server error');
    }
  }

  // PRODUCTS FUNCTIONS
  function handleAddProduct(product) {
    setProducts((currentProducts) => [...currentProducts, product]);
    console.log('Product added to cart!', product);
  }

  function handleRemoveProduct(id) {
    console.log(id);
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  }

  function onChange(e) {
    const value = e.target.value;
    setSearch(value);
  }

  // Filter the products based on the search input
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <OaBox linkTo="/store/products" title="BEST HARDWARE, BEST PRICE" content="only at OA" />
      <Container className="text-center mt-4">

        <h1 className={styles.hardwareHeading}>HARDWARE SELECTION</h1>
        <OaButton>Software</OaButton>

        <Form>
          <InputGroup>
            <Form.Control type="search" placeholder="Search Products" onChange={onChange} />
          </InputGroup>
        </Form>

        {loading ? (
          <Container className="text-center mt-4">
            <OaLoader />
          </Container>
        ) : error ? (
          <Container className="text-center mt-5">
            <p>Error loading page...</p>
          </Container>
        ) : (
          <ProductsList products={filteredProducts} onAddToCart={handleAddProduct}/>
        )}
      </Container>
    </div>
  );
}

export default ProductsMenu;
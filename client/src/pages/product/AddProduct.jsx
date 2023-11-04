import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, InputGroup, Row, Col, Spinner} from 'react-bootstrap'

import productService from '../../services/productServices'
import OaCard from '../../components/common/OaCard'
import OaButton from '../../components/common/OaButton'

function AddProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    manufacturer: "",
    onSale: false,
    isAvailable: true,
    image: ""
  })

  const [loading, setLoading] = useState(false);

  const { name, description, category, price, manufacturer, onSale, isAvailable } = productData

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();      
    setLoading(true);
    try {
      // API Post (refactored)
      const response = await productService.post(productData);
      console.log(response);
      navigate('/store/products');

    } catch (err) {
      console.log(err?.response);
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
      setTimeout(() => {setLoading(false)}, 1000);
    }
  };

  return (
    <OaCard title="Add Product">
      <Form onSubmit={handleSubmit}>
        {/* PRODUCT NAME */}
        <Form.Group className='mb-3'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product name"
            name="name"
            value={name}
            onChange={handleTextChange}
          />
        </Form.Group>

 {/* GROUP 2: DESCRIPTION */}
      <Form.Group className="mb-3">
          <Form.Label>Product description</Form.Label>
          <Form.Control type="textarea" placeholder="Enter product description" name="description" value={description}  onChange={handleTextChange}/>
        </Form.Group>

        {/* GROUP 3: CATEGORY */}
        <Form.Group className="mb-3">
          <Form.Label>Product category</Form.Label>
          <Form.Control 
            as='select'
            name='category'
            value={category}
            onChange={handleTextChange}
          >
            <option value="#">Select a Category</option>
            <option value="gpu">GPU</option>
            <option value="peripherals">Peripherals</option>
            <option value="processor">Processor</option>
            <option value="power-supply">Power Supply</option>
            <option value="pre-built">Pre-built PC</option>
            <option value="software">Software</option>
          </Form.Control>
        </Form.Group>

            {/* GROUP 4: PRODUCT DETAILS */}
            <Form.Group className="mb-3">
          <Row>
            {/* PRICE */}
            <Col lg={4} md={4} sm={12}>
              <Form.Label>Product price</Form.Label>
              <InputGroup>          
                <InputGroup.Text id="price-dollar">$</InputGroup.Text>
                <Form.Control 
                type="number" 
                aria-describedby="price-dollar" 
                id="price-input" name="price"  
                value={price} 
                placeholder="0" 
                onChange={handleTextChange}
                />
              </InputGroup>
            </Col>

            {/* MANUFACTURER */}
            <Col lg={4} md={4} sm={12}>
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control 
                as='select'
                name='manufacturer'
                value={manufacturer}
                onChange={handleTextChange}
              >
                <option value="#">Select a Manufacturer</option>
                <option value="alienware">Alienware</option>
                <option value="aorus">Aorus</option>
                <option value="asus">Asus</option>
                <option value="gigabyte">Gigabyte</option>
                <option value="msi">MSI</option>
                <option value="oa">Online Accessories</option>
              </Form.Control>
            </Col>
            {/* SALE STATUS */}
            <Col lg={6} md={6} sm={12}>
              <Form.Label>Product sale status</Form.Label>
              <Form.Control 
                as='select'
                name='onSale'
                value={onSale}
                onChange={ handleTextChange }
              >
                <option value={false}>Standard</option>
                <option value={true}>On Sale</option>
              </Form.Control>
            </Col>
            {/* AVAILABLE STATUS */}
            <Col lg={6} md={6} sm={12}>
              <Form.Label>Product availability</Form.Label>
              <Form.Control 
                as='select'
                name='isAvailable'
                value={isAvailable}
                onChange={ handleTextChange }
              >
                <option value={true}>In Stock</option>
                <option value={false}>Out of Stock</option>
              </Form.Control>
            </Col>

          {/* END OF PRODUCT DETAILS ROW */}
          </Row>
        </Form.Group>

        {/* GROUP 6: PRODUCT IMAGE */}
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Product image</Form.Label>
          <Form.Control 
            type="file"
            className="mb-4"
            onChange={handleFileChange}
          />
        </Form.Group>


       {/* BUTTON SUBMIT */}
       <OaButton loadingState={loading}
        >
          {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : 'Submit'}
      </OaButton>
      </Form>
    </OaCard>
  )
}

export default AddProduct
import * as styles from './ProductsList.css'
import { Button } from "react-bootstrap";
import ProductItem from "./ProductItem"

function ProductsList(props) {
  const { products, onAddProduct, onRemoveProduct } = props;
  return (
    <div>
      <div className={styles.btnBox}>
        <Button onClick={() => onAddProduct("NEW!")} variant="info" type="button">Add to Cart</Button>
      </div>
      <div className={styles.listGrid}>
        {products.length === 0 && <p>Empty cart...</p>}
        {products.length > 0 && products.map(product => 
          <ProductItem 
            key={product.id}
            product={product}
            onRemoveProduct={onRemoveProduct} 
          />
        )}
      </div>
    </div>
  )
}

export default ProductsList
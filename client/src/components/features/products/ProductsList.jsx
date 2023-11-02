import * as styles from './ProductsList.css'
import ProductItem from "./ProductItem"
import { priceFormatter } from '../../../services/readUtils'

function ProductsList({products}) {

  return (
    <div className={styles.gridContainer}>
      <div className={styles.productGrid}>
        {products.length === 0 && <p>Empty cart...</p>}
        {products.length > 0 && products.map(product => 
          <ProductItem 
            key={product.id}
            id={product.id}
            productName={product.productName}
            description={product.description}
            price={priceFormatter(product.price)}
            category={product.category}
            manufacturer={product.manufacturer}
            image={product.image}
            onSale={product.onSale}
            isAvailable={product.isAvailable}
          />
        )}
      </div>
    </div>
  )
}

export default ProductsList
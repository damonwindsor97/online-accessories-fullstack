import * as styles from './ProductItem.css'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'


function ProductItem(props) {
  return (
    <Link className={styles.productLink} to={`/store/product/${props.id}`}>
      <div className={styles.productCard}>
        <div className={styles.imageBox}>
          {props.onSale == "true" && <p className={styles.onSale}>ON SALE</p>}
          <Image src={props.image} alt={props.image} thumbnail className={styles.productImage}/>
          <p className={styles.productCardCategory}>{props.category}</p>
        </div>
        <div className={styles.productCardContent}>
          <h2 className={styles.productCardTitle}>{props.name}</h2>
          <p>{props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
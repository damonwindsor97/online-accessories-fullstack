import * as styles from './ProductItem.css'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'


function ProductItem(props) {
  return (
    <Link className={styles.productLink} to="#">
      <div className={styles.productCard}>
        <Image src={props.image} alt={props.image} thumbnail/>
        <div className={styles.productCardContent}>
          <h2 className={styles.productCardTitle}>{props.productName}</h2>
          <p>{props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
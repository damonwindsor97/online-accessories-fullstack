import * as styles from './OaLinkBox.css'
import { Link } from 'react-router-dom'


const OaLinkBox = props => {
  return (
    <div className={styles.LinkBox}>
      <div className={styles.LinkBoxContent}>
        <img className={styles.LinkBoxImage}  alt="alt" src={props.image}/>
        <h2 className={styles.LinkBoxTitle}>{props.title}</h2>
      </div>
    </div>
  )
}

export default OaLinkBox
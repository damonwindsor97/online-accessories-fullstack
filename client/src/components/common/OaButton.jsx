import { Link } from "react-router-dom"
import * as styles from './OaButton.css'

const OaButton = ({content, icon}) => {
  return (
    <Link><button className={styles.OaButton}>{content} {icon}</button></Link>
  )
}

export default OaButton
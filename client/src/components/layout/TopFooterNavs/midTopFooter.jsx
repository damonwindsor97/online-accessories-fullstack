import { Link } from "react-router-dom"
import * as styles from '../TopFooter.css'

function midTopFooter() {
  return (
    <div>
        <h4>Customer Service</h4>
        <ul className={styles.NavStyling}>
        <Link  className={styles.navLink}>
                <li>
                    Support
                </li>
        </Link>
        </ul>
    </div>
  )
}

export default midTopFooter
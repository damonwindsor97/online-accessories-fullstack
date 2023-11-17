import { Link } from "react-router-dom"
import * as styles from '../TopFooter.css'

function righTopFooter() {
  return (
    <div>
        <h4>Partnered Links</h4>
        <ul className={styles.NavStyling}>
            <Link  className={styles.navLink}>
                <li>
                    Provide API
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default righTopFooter
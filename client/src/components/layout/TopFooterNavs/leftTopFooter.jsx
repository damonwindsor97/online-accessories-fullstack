import * as styles from '../TopFooter.css'

function leftTopFooter() {
  return (
    <div>
        <h4>Quick Links</h4>
        <ul className={styles.NavStyling}>
            <li>
                Home
            </li>
            <li>
                Products
            </li>
            <li>
                Support
            </li>
            <li>
                Sign-up
            </li>
            <li>
                Login
            </li>
        </ul>
    </div>
  )
}

export default leftTopFooter
import * as styles from './OaBox.css'
import { Link } from 'react-router-dom'

const OaBox = ({ title, content, link, linkTo,  }) => {
  return (
    <div className={styles.boxSetting} style={{ 
      backgroundImage: `url("https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?auto=format&fit=crop&q=80&w=3588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, 
      backgroundSize: "cover",

    }}>
      <h1 className={styles.boxTitle}>{title}</h1>
      <p className={styles.boxPara}>{content}</p>
      {link && (<div className={styles.boxButton}>
        <Link to={linkTo}>{link}</Link>
      </div>
      )}
    </div>
  )
}

export default OaBox
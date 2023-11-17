import * as styles from './OaBox.css'
import { Link } from 'react-router-dom'
import BgImage from '../../assets/images/Untitledheader.png'

const OaBox = ({ title, content, link, linkTo  }) => {
  return (
    <div className={styles.boxSetting} style={{ 
      backgroundImage: `url("https://media.discordapp.net/attachments/1025061503386255390/1174551236054360115/Untitledheader.png?ex=65680114&is=65558c14&hm=ca0b2d607780a442d87d6d8dbe475a6aeb5503d939b8de40bef2d173419e8982&=&width=877&height=391")`, 
      backgroundSize: "cover",
      borderRadius: "10px"
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
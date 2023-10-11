import * as styles from './TopFooter.css'



// Nav Imports
import LeftTopFooter from './TopFooterNavs/leftTopFooter'
import RighTopFooter from './TopFooterNavs/righTopFooter'

function TopFooter() {
  return (
    <div className={[styles.TopFooter]}>
        <div className={styles.TopFooterContent}>
            <div className={styles.TopFooterNav}>
                <LeftTopFooter/>
            </div>
            <div className={styles.TopFooterNav}>
                _
            </div>
            <div className={styles.TopFooterNav}>
                <RighTopFooter/>
            </div>
        </div>
    </div>
  )
}

export default TopFooter
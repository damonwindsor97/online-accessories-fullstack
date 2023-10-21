import { Link } from "react-router-dom"

const OaButton = ({content, linkTo, icon}) => {
  return (
    <Link to={linkTo}><button className='OaButton'>{content} {icon}</button></Link>
  )
}

export default OaButton
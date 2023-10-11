

const OaButton = ({content, linkTo, icon}) => {
  return (
    <button className='OaButton' to={linkTo}>{content} {icon}</button>
  )
}

export default OaButton
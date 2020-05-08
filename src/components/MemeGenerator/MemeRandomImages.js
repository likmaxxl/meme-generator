import React from 'react'
import PropTypes from 'prop-types'
import './MemeRandomImages.css'
const MemeRandomImages = (props) => {
  return (
<>
  <div className="backgroundImages">
    <div className="img">
      <div className="text">{props.topText}</div>
      <img src={props.genBackground} alt="" />
      <div className="text">{props.bottomText}</div>
    </div>
  </div>
</>

  )
}

export default MemeRandomImages

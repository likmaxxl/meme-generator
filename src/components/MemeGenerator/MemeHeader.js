import React from 'react'
import PropTypes from 'prop-types'
import './MemeHeader.css'

const MemeHeader = (props) => {
  return (
<>
<header>
  <div className="logo">
    <img src="images/hackerFace.png" alt="logo"/>
  </div>
  <div className="title">
    <h1>Meme Generator</h1>
  </div>
</header>
</>
  )
}

export default MemeHeader

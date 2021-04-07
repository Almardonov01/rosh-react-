import React from 'react'
import '../GoogleMap/GoogleMap.css'
import googlemap from '../../image/googlemap.svg'


const GoogleMap = () => {
  return (
    <div className="GoogleMap_container">
      <img src={googlemap} alt="" />
    </div>
  )
}

export default GoogleMap;
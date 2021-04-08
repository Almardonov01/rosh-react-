import React from 'react'

const ManuTopInfo = (props) => {
    return (
        <div className="ManuTopInfo_container">
            <div className="grayBorders"></div>
            <h2>{props.mainContent}</h2>
            <div className="grayBorders"></div>
        </div>
    )
}

export default ManuTopInfo;
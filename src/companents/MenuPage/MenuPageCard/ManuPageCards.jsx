import React from 'react'

import Blue from '../../../image/bluetelegram.svg'

const ManuPageCards = (props) => {
    return (
        <div className="ManuPageCards_container">
            <div className="ManuPageCards_container_img">
                <img src={props.MainPage} alt="" />
            </div>
            <div className="grayBorder"></div>
            <h3>{props.FoodName}</h3>
            <div className="Price_container">
                <h3>200 P</h3>
                <button>
                    <img src={Blue} alt="" />
                    <p>Закакзать</p>
                </button>
            </div>
            <p className="smallTitle">{props.smallTitle}</p>
        </div>
    )
}

export default ManuPageCards;
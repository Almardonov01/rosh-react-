import React from 'react'

const SpecialThingsCard = (props) => {
    return (
        <div className="SpecialThingsCard__container">
            <img src={props.cardImg} alt="" />
            <div className="SpecialThingsCard__content">
                <div className="SpecialThingsCard__content_top">
                    <h4>
                        {props.top}
                    </h4>
                </div>
                <div className="SpecialThingsCard__content_Bottom">
                    <p>
                        {props.bottom}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpecialThingsCard;
import React from 'react'

const EventsCard = (props) => {
    return (
        <div className="EventsCard_container">
            <img src={props.img} alt="" />
            <p>{props.title}</p>
        </div>
    )
}

export default EventsCard;
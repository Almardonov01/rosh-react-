import React from 'react'

const MessengerLinksCard = (props) => {
    return (
        <div className="MessengerLinksCard_container">
            <div className="mainImg_container">
                <img src={props.mainImg} alt="" />
                </div>
            <div className="Links_container">
                <img src={props.linkImg} alt="" />
                <h4>{props.title}</h4>
            </div>
            <p>{props.content}</p>
        </div>
    )
}
export default MessengerLinksCard;
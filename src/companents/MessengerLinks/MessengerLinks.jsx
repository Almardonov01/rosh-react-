import React from 'react'
import MessengerLinksCard from './MessengerLinksCard/MessengerLinksCard'
import '../MessengerLinks/MessengerLinks.css'
import Pizza from '../../image/pizza.svg'
import Burger from '../../image/burger.svg'
import Salad from '../../image/salad.svg'
import Facebook from '../../image/facebook.svg'
import Telegram from '../../image/telegram.svg'
import Instagram from '../../image/instagram.svg'

const MessengerLinks = () => {
    return (
        <div className="MessengerLinks_container">
            <MessengerLinksCard
                mainImg={Pizza}
                linkImg={Facebook}
                title="facebook"
                content="Самые свежие новости здесь. Стэй тюнд!"
            />
            <MessengerLinksCard
                mainImg={Burger}
                linkImg={Telegram}
                title="telegram"
                content="Акции и спецпредложения плов по вкусным ценам."
            />
            <MessengerLinksCard
                mainImg={Salad}
                linkImg={Instagram}
                title="instagram"
                content="Кухня, ивенты персонал... и море других фото!"
            />
        </div>
    )
}
export default MessengerLinks;
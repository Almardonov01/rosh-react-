import React from 'react'
import Rosh_img1 from '../../image/Rosh-burger_1.svg'
import Rosh_img2 from '../../image/Rosh-burger_2.svg'
import Rosh_img3 from '../../image/Rosh-burger_3.svg'
import Rosh_img4 from '../../image/Rosh-burger_4.svg'
import EventsCard from './EventsCard/EventsCard'
import '../../companents/Events/Events.css'

const Events = () => {
    return (
        <div>
            <div className="Events_container">
                <h3>СОБЫТИЯ</h3>
                <div className="Events_EventsCard">
                    <EventsCard
                        img={Rosh_img1}
                        title="Наслаждайтесь вкусом"
                    />
                    <EventsCard
                        img={Rosh_img2}
                        title="То что вы искали..."
                    />
                    <EventsCard
                        img={Rosh_img3}
                        title="Вкус от Европы деликатес!"
                    />
                    <EventsCard
                        img={Rosh_img4}
                        title="Мы открыты для вас!"
                    />
                </div>
            </div>
        </div>
    )
}

export default Events;
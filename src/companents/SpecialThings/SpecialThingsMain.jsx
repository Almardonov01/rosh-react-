import React from 'react'
import SpecialThingsCard from './SpecialThingsCard/SpecialThingsCard'
import '../../companents/SpecialThings/SpecialThingsMain.css'
import HeadPhones from './../../image/Headphones.svg'
import Delivery from './../../image/delivery.svg'
import Timer from './../../image/timer.svg'
import Stove from './../../image/stove.svg'
import Box from './../../image/box.svg'
import HotFood from './../../image/hot-food.svg'

const SpecialThingsMain = () => {
    return (
        <div className=" SpecialThingsMain__container">
            <div className="SpecialThingsMain__container_flex">
                <SpecialThingsCard
                    cardImg={HeadPhones}
                    top="Связаться с оператором"
                    bottom="Вы можете позвонить нашему оператору  и осуществлять ваш заказ"
                />
                <SpecialThingsCard
                    cardImg={Delivery}
                    top="Заказать через бот"
                    bottom="Вы можете осуществлять выш заказ не выходя из дома через наш телеграмм бот"
                />
                <SpecialThingsCard
                    cardImg={Timer}
                    top="Время доставки"
                    bottom="Время доставки по городу Ташкента, в течении 20-40 минут"
                />
            </div>
            <div className="SpecialThingsMain__container_flex">
                <SpecialThingsCard
                    cardImg={Stove}
                    top="Подадим горячим"
                    bottom="используем термоустойчивую посуду и технологии подогрева"
                />
                <SpecialThingsCard
                    cardImg={Box}
                    top="Разложим и упакуем"
                    bottom="удобная посуда (порционно или в общем блюде) и упаковка"
                />
                <SpecialThingsCard
                    cardImg={HotFood}
                    top="Накормим гостей"
                    bottom="Приготовим и подадим на вашем корпаративном мероприятии"
                />
            </div>
        </div>
    )
}

export default SpecialThingsMain;
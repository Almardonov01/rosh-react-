import React from 'react'
import AnimationPizzaCont from '../AnimationPizza/AnimationPizzaCont'
import BannerImage from '../BannerImage/BannerImage'
import CenterInfo from '../CenterInfo/CenterInfo'
import CenterLinkInfo from '../CenterLinkInfo/CenterLinkInfo'
import Events from '../Events/Events'
import GoogleMap from '../GoogleMap/GoogleMap'
import MessengerLinks from '../MessengerLinks/MessengerLinks'
import ScrollCar from '../ScrollCar/ScrollCar'
// import SpecialThingsCard from '../SpecialThings/SpecialThingsCard/SpecialThingsCard'
import SpecialThingsMain from '../SpecialThings/SpecialThingsMain'

const MainPage = () => {
    return (
        <main>
            <BannerImage />
            <ScrollCar />
            <SpecialThingsMain />
            <AnimationPizzaCont />
            <CenterInfo />
            <Events />
            <CenterLinkInfo />
            <MessengerLinks />
            <GoogleMap />
        </main>
    )
}

export default MainPage;
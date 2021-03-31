import React from 'react'
import NavigationLinks from './NavigationLinks/NavigationLinks'
import roshLogo from '../../image/rosh-logo.svg'
import '../Navigation/Navigation.css'


const Navigation = () => {
    return (
        <div className="navigationContainer">
            <img src={roshLogo} alt="" />
            <div className="NavigationLinksContainer">
                <div className="navigation__links">
                    <NavigationLinks
                        title="Меню"
                    />
                    <NavigationLinks
                        title="Доставка"
                    />
                    <NavigationLinks
                        title="Галерея"
                    />
                </div>
                <div className="navigation__number">
                    <a href="tel:+998946560501">(33)430 20 20</a>
                </div>
                <div className="work__time">
                    <h4>Режим работы <br /> с 10:00 до 22:00</h4>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
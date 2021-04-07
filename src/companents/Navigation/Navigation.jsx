import React from 'react'
import NavigationLinks from './NavigationLinks/NavigationLinks'
import roshLogo from '../../image/rosh-logo.svg'
import '../Navigation/Navigation.css'
import { Link } from '@reach/router'


const Navigation = () => {
  return (
    <div className="Navigation_main_container">
      <div className="navigationContainer">
        <Link to="/">
          <img src={roshLogo} alt="" />
        </Link>
        <div className="NavigationLinksContainer">
          <ul className="navigation__links">
            <NavigationLinks
              links="Menu"
              title="Меню"
            />
            <NavigationLinks
              links="Delivery"

              title="Доставка"
            />
            <NavigationLinks
              links="asdd"

              title="Галерея"
            />
          </ul>
          <div className="navigation__number">
            <a href="tel:+998946560501">(33)430 20 20</a>
          </div>
          <div className="work__time">
            <h4>Режим работы <br /> с 10:00 до 22:00</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
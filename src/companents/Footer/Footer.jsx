import React from 'react'
import FooterLinks from './FooterLinks/FooterLinks'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer_main_container">
            <div className="Footer_container">
                <ul className="Footer_container_top">
                    <FooterLinks
                        title="НАШЕ МЕНЮ"
                        links="Menu"
                    />
                    <FooterLinks
                        title="ДОСТАВКА И ОПЛАТА"
                        links="Delivey"
                    />
                    <FooterLinks
                        title="СОБЫТИЯ"
                        links="Menu"
                    />
                    <FooterLinks
                        title="О НАС"
                        links="Menu"
                    />
                    <FooterLinks
                        title="Галерея"
                        links="Menu"
                    />
                    <FooterLinks
                        title="СВЯЗАТЬСЯ СНАМИ"
                        links="Menu"
                    />
                </ul>
                <div className="Footer_container_bottom">
                    <FooterLinks
                        title="ROSH.COM, 2021"
                        links="/"
                    />
                    <div className="Footer_container_bottom_bottom">
                        <p>Политика конфиденциальности</p>
                        <p>Порядок отмены и возврата платежа</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
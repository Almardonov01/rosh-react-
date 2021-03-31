import React from 'react'
import roshCarImg from '../../image/rosh_car.svg'
import '../ScrollCar/ScrollCar.css'
import CarBottomWay from '../ScrollCar/CarBottomWay/CarBottomWay'

const ScrollCar = () => {
    return (
        <div className="ScrollCar__Container">
            <div className="ScrollCar__Container__topContent">
                <h4>ДОСТАВКА И ОПЛАТА</h4>
                <div className="right__content">
                    <h4>С 10:00 до 22:00</h4>
                    <p>Работаем без выходных!</p>
                </div>
            </div>
            <div>
                <img src={roshCarImg} alt="" />
                <CarBottomWay />
            </div>
        </div>
    )
}
export default ScrollCar;
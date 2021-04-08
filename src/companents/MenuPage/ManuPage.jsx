import React from 'react'
import BannerImage from '../BannerImage/BannerImage'
import '../MenuPage/ManuPage.css'
import ManuPageCards from './MenuPageCard/ManuPageCards'
import ManuTopInfo from './ManuTopInfo/ManuTopInfo'
//  Burgers image
import Rush_burger from '../../image/Rush burger.svg'
import Cheese_Burger from '../../image/Cheese Burger.svg'
import Rome_Burger from '../../image/Rome Burger.svg'
import Streak_Burger from '../../image/Streak Burger.svg'
// Pizza images
import Пепперони from '../../image/Пепперони.svg'
import Итальяна from '../../image/Итальяна.svg'
import Маргарита from '../../image/Маргарита.svg'
import Карида from '../../image/Карида.svg'
// Выпечка
import Круасон from '../../image/Круасон.svg'
import Батон from '../../image/Батон.svg'
import Булочка from '../../image/Булочка.svg'
// Салад
import Греческий from '../../image/Греческий.svg'
import Цезарь from '../../image/Цезарь.svg'
import Любимый from '../../image/Любимый.svg'
import Руколла_Черри from '../../image/Руколла_Черриsvg.svg'
// Десерт
import Чизкейк from '../../image/Чизкейк.svg'
import Тирамису from '../../image/Тирамису.svg'
import Шоколадный_фрап from '../../image/Шоколадный_фрап.svg'
import Мороженное from '../../image/Мороженное.svg'
// Food
import Пельмени from '../../image/Пельмени.svg'
import Rabbit from '../../image/Rabbit.svg'
import Альфредо from '../../image/Альфредо.svg'
import Катлет from '../../image/Катлет.svg'
// Соус
import Сливочный from '../../image/Сливочный.svg'
import Чисночный from '../../image/Чисночный.svg'
import Цезарь1 from '../../image/Цезарь1.svg'
import Сугилит from '../../image/Сугилит.svg'
import Томатный from '../../image/Томатный.svg'
// Дополнительно
import Долки from '../../image/Долки.svg'
import Крылышки from '../../image/Крылышки.svg'
import Фри from '../../image/Фри.svg'



const ManuPage = () => {
    return (
        <div className="ManuPage_container">
            <BannerImage />

            <ManuTopInfo
                mainContent="Бургер"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Rush_burger}
                    FoodName="Rush burger"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Cheese_Burger}
                    FoodName="Rush burger"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Rome_Burger}
                    FoodName="Rush burger"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Streak_Burger}
                    FoodName="Rush burger"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>

            <ManuTopInfo
                mainContent="Пицца"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Пепперони}
                    FoodName="Пепперони"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Итальяна}
                    FoodName="Итальяна"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Маргарита}
                    FoodName="Маргарита"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Карида}
                    FoodName="Карида"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>

            <ManuTopInfo
                mainContent="Выпечка"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Круасон}
                    FoodName="Круасон"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Батон}
                    FoodName="Батон"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Булочка}
                    FoodName="Булочка"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
            </div>
            <ManuTopInfo
                mainContent="Салад"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Греческий}
                    FoodName="Греческий"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Цезарь}
                    FoodName="Цезарь"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Любимый}
                    FoodName="Любимый"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Руколла_Черри}
                    FoodName="Руколла Черри"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>

            <ManuTopInfo
                mainContent="Десерт"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Чизкейк}
                    FoodName="Чизкейк"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Тирамису}
                    FoodName="Тирамису"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Шоколадный_фрап}
                    FoodName="Шоколадный фрап"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Мороженное}
                    FoodName="Мороженное"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>

            <ManuTopInfo
                mainContent="Food"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Пельмени}
                    FoodName="Пельмени"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Rabbit}
                    FoodName="Rabbit"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Альфредо}
                    FoodName="Альфредо "
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Катлет}
                    FoodName="Катлет"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>

            <ManuTopInfo
                mainContent="Соус"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Сливочный}
                    FoodName="Сливочный"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Чисночный}
                    FoodName="Чисночный"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Томатный}
                    FoodName="Томатный "
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Цезарь1}
                    FoodName="Цезарь"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Сугилит}
                    FoodName="Сугилит"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>

            <ManuTopInfo
                mainContent="Соус"
            />
            <div className="Cards_container">
                <ManuPageCards
                    MainPage={Долки}
                    FoodName="Долки"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Крылышки}
                    FoodName="Крылышки"
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />
                <ManuPageCards
                    MainPage={Фри}
                    FoodName="Фри "
                    smallTitle="Состав входит несколько продуктов
                    - сорт 1 ложка, яйцо 4е,  также вода 2 ложки. И  также другое "
                />

            </div>
        </div>
    )
}

export default ManuPage;
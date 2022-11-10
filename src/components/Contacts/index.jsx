import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './index.scss' 

const Contacts = () => {
    return (
        <div className='wrapper'>
            <div className="contacts__container">
                <h1 className='contacts__title'>Контакты</h1>
                <div className="contacts__items">
                    <div className="contacts__item">
                        <h6 className='contacts__subtitle'>Адрес</h6>
                        <p className='contacts__text'>ул. Пушкина, 84, стр. 91, Москва, Россия</p>
                    </div>
                    <div className="contacts__item" id='contacts__phone'>
                        <h6 className='contacts__subtitle'>Телефон</h6>
                        <a href="tel:+74957387323" className='contacts__link'>+7 (495) 738-73-23</a>
                    </div>
                    <div className="contacts__item" id='contacts__email'>
                        <h6 className='contacts__subtitle'>Электронная почта</h6>
                        <a href="mailto:info@company-name.ru" className='contacts__link'>info@company-name.ru</a>
                    </div>
                </div>
                <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa201e7fb303e2bbce6bcd4db6f829c51fbba90aa31b0ac7732a3ce992a2646b1&amp;source=constructor" width="100%" height="470" frameborder="0"></iframe>
                <h4 className="ad__title">Размещение рекламы</h4>
                <div className="contacts__items">
                    <div className="contacts__item">
                        <h6 className="contacts__subtitle">Телефон</h6>
                        <a href="tel:+74957387323" className='contacts__link'>+7 (495) 738-73-23</a>
                    </div>
                    <div className="contacts_item" id='ad__email'>
                        <h6 className="contacts__subtitle">Электронная почта</h6>
                        <a href="mailto:reklama@company-name.ru" className='contacts__link'>reklama@company-name.ru</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
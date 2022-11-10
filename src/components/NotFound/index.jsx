import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './index.scss';
import Search from '../SearchForm/Search';

const NotFound = () => {
    return (
        <div className='wrapper'>
            <div className="notfound__container">
                <h1 className="notfound__title">404<br />Страница не найдена</h1>
                <p className='notfound__text'>Перейдите на <a href='/' className='notfound__home-link'>главную страницу</a> или воспользуйтесь поиском</p>
                <Search size='large'></Search>
                {/* <div className="search">
                    <form action="/search" method='get' className="notfound__search">
                        <input type="text" placeholder='Поиск' className="notfound__search_input" />
                        <button type="submit" className="notfound__search_submit">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.8457 34.4887L27.387 25.0299C29.5152 22.3738 30.6724 19.0705 30.667 15.667C30.667 7.38283 23.9516 0.666992 15.667 0.666992C7.38283 0.666992 0.666992 7.38283 0.666992 15.667C0.666992 23.9512 7.38283 30.667 15.667 30.667C19.2087 30.667 22.4637 29.4395 25.0299 27.3866L34.4887 36.8453C34.6432 37.0003 34.8269 37.1233 35.0291 37.2071C35.2313 37.2909 35.4481 37.3339 35.667 37.3337C35.9966 37.3337 36.3188 37.2359 36.5929 37.0528C36.867 36.8697 37.0806 36.6095 37.2068 36.3049C37.333 36.0004 37.366 35.6653 37.3017 35.342C37.2375 35.0187 37.0788 34.7218 36.8457 34.4887ZM15.667 27.3337C9.22366 27.3337 4.00033 22.1103 4.00033 15.667C4.00033 9.22366 9.22366 4.00033 15.667 4.00033C22.1107 4.00033 27.3337 9.22366 27.3337 15.667C27.3337 22.1103 22.1107 27.3337 15.667 27.3337Z" fill="#2269F4"/>
                            </svg>
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default NotFound;
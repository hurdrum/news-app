import React, { useState } from "react"
import classNames from "classnames";

import './search.scss';
import Card from '../News/Card'

const Search = ({size}) => {

    const [active, setActive] = useState(false);
    const [liveNews, setLiveNews] = useState([]);
    const [request, setRequest] = useState('');

    const onInput = (e) => {
        let request = e.target.value;
        setRequest(request);
        setActive(true);
        if (!request.length) {
            setLiveNews([])
        } else {
            let response = [1, 1, 1, 1, 1, 1];
            if (response.length) {
                setLiveNews(response);
            }
        }
    }

    window.addEventListener('click', function (e) {
        if (!e.target.closest('.search_form') && active) {
            setActive(false);
        }
    })

    return (
        <div className={classNames("search_form", {
            "large": size === 'large',
        })}>
            <form action="/search" method='get'>
                <input type="text" placeholder='Поиск' name='text' onInput={(e) => {onInput(e)}} onFocus={() => setActive(true)}/>
                <button type="submit">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9226 17.7442L14.1933 13.0148C15.2573 11.6868 15.836 10.0351 15.8333 8.33337C15.8333 4.19129 12.4755 0.833374 8.33325 0.833374C4.19117 0.833374 0.833252 4.19129 0.833252 8.33337C0.833252 12.4755 4.19117 15.8334 8.33325 15.8334C10.1041 15.8334 11.7316 15.2196 13.0147 14.1932L17.7441 18.9225C17.8214 19 17.9132 19.0615 18.0143 19.1034C18.1154 19.1453 18.2238 19.1668 18.3333 19.1667C18.4981 19.1667 18.6592 19.1178 18.7962 19.0263C18.9333 18.9347 19.0401 18.8046 19.1032 18.6523C19.1662 18.5001 19.1828 18.3325 19.1506 18.1709C19.1185 18.0093 19.0391 17.8608 18.9226 17.7442ZM8.33325 14.1667C5.11159 14.1667 2.49992 11.555 2.49992 8.33337C2.49992 5.11171 5.11159 2.50004 8.33325 2.50004C11.5551 2.50004 14.1666 5.11171 14.1666 8.33337C14.1666 11.555 11.5551 14.1667 8.33325 14.1667Z" fill="#2269F4"/>
                    </svg>
                </button>
            </form>
            { Boolean(liveNews.length) && active &&
                <div className="search_form__live_news">
                    <div className="search_form__live_news_list">
                        {
                            liveNews.map(news => 
                                <Card type='only-title'></Card>
                            )
                        }
                    </div>
                    <a href={`/search?text=${request}`} className="search_form__live_news_btn">
                        Показать все результаты
                    </a>
                </div>
            }
        </div>
    )
}

export default Search
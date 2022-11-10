import { React, useState, useEffect } from 'react';
import {
    useLocation
  } from "react-router-dom";

import './index.scss';
import Card from '../Card'
import Timeline from '../Timeline'
import SearchForm from './form';
import noResultIcon from '../../../assets/image/no-result-icon.svg'

import DB from '../article.json'


const Search = ({result = Array(10).fill(DB.article)}) => {

    useEffect(() => {
        document.title = 'Новости Петербруга - Поиск'
    })

    const [request, setRequest] = useState({text: '', time: 'all', sort: 'date'});
    console.log(request)

    const location = useLocation();
    let info = {}
    let search = location.search
    if (location.search.includes('author')) {
        info = {
            author: search.slice(8, search.length)
        }
    }
    if (location.search.includes('category')) {
        info = {
            category: search.slice(10, search.length)
        }
    }
    if (location.search.includes('text')) {
        info = {
            text: search.slice(6, search.length)
        }
    }

    let news
    if (result.length) {
    news = <div className="search__result">
                { result.map((article, i) => 
                    <Card key={i} article={article} type='medium'></Card>
                )}
            </div>
    } else {
        news = <div className="search__result">
                    <div className="search__zero">
                        <div className="search__zero_img">
                            <img src={noResultIcon} alt="ничего не найдено" />
                        </div>
                        <div className="search__zero_text">
                        По вашему запросу ничего не найдено, попробуйте другие варианты
                        </div>
                    </div>
                </div>
    }

    return (
        <div className="search">
            <div className="container">
                <div className="search__content">
                    <main>
                        <SearchForm search={setRequest} info={info}></SearchForm>
                        {news}
                    </main>
                    <Timeline></Timeline>
                </div>
            </div>
            
        </div>
    );
}

export default Search
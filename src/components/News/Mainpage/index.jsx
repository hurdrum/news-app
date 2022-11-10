import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

 import './index.scss' 
 import Card from '../Card';
 import Timeline from '../Timeline';

 import DB from '../article.json'

const Mainpage = ({news = {
    main: DB.article,
    actual: Array(10).fill(DB.article),
    bigCategories: [
        {
            title: 'Город',
            news: Array(4).fill(DB.article),
        },
        {
            title: 'Экспетрное мнение',
            news: Array(4).fill(DB.article),
        },
    ],
    smallCategories: [
        [
            {
                title: 'Образование',
                news: Array(4).fill(DB.article),
            },
            {
                title: 'Экспетрное мнение',
                news: Array(4).fill(DB.article),
            },
            {
                title: 'Город',
                news: Array(4).fill(DB.article),
            }
        ],      
        [
            {
                title: 'Образование',
                news: Array(4).fill(DB.article),
            },
            {
                title: 'Экспетрное мнение',
                news: Array(4).fill(DB.article),
            },
            {
                title: 'Город',
                news: Array(4).fill(DB.article),
            }
        ],    
    ],
    authors: Array(10).fill(DB.article),
}}) => {

    const [type, setType] = useState('news');

    useEffect(() => {
        document.title = 'Новости Петербурга - Главная'
    })

    return(
        <div className="mainpage">
            <div className="container">
                <div className={classnames("mainpage__content", {
                    "mainpage__news": type === "news",
                    "mainpage__timeline": type === "timeline"
                })}>
                    <main>
                        <div className="mainpage__type_switch">
                            <div className={classnames('mainpage__type_switch_btn', {
                                            'mainpage__type_switch_btn_active': type === 'news'
                                            })} 
                                            onClick={() => {setType('news')}}>
                                <h1>Все новости</h1>
                            </div>
                            <div className={classnames('mainpage__type_switch_btn', {
                                            'mainpage__type_switch_btn_active': type === 'timeline'
                                            })}  onClick={() => {setType('timeline')}}>
                                <h1>Лента</h1>
                            </div>
                        </div>
                        <div className="mainpage__type_news_content">
                            <section className="mainpage__main_news mainpage__bordered_block">
                                <Card article={news.main} type='big'></Card>
                            </section>
                            <section className="mainpage__actual">
                                <header className='mainpage__title'>
                                    <h3>Актуальное</h3>
                                    <div className="mainpage__slider_nav">
                                        <button className="mainpage__slider_nav_btn mainpage__slider_nav_btn_prev mainapge__actual_prev">
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16499 14.9385C0.761002 14.5345 0.761002 13.8795 1.16499 13.4755L6.6404 8.00008L1.16499 2.52467C0.761002 2.12068 0.761002 1.46568 1.16499 1.06169C1.56898 0.657697 2.22398 0.657697 2.62797 1.06169L8.83487 7.26859C9.23886 7.67258 9.23886 8.32757 8.83487 8.73156L2.62797 14.9385C2.22398 15.3425 1.56898 15.3425 1.16499 14.9385Z" fill="#222222"/>
                                            </svg>
                                        </button>
                                        <button className="mainpage__slider_nav_btn mainpage__slider_nav_btn_next mainapge__actual_next">
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16499 14.9385C0.761002 14.5345 0.761002 13.8795 1.16499 13.4755L6.6404 8.00008L1.16499 2.52467C0.761002 2.12068 0.761002 1.46568 1.16499 1.06169C1.56898 0.657697 2.22398 0.657697 2.62797 1.06169L8.83487 7.26859C9.23886 7.67258 9.23886 8.32757 8.83487 8.73156L2.62797 14.9385C2.22398 15.3425 1.56898 15.3425 1.16499 14.9385Z" fill="#222222"/>
                                            </svg>
                                        </button>
                                    </div>
                                </header>
                                <Swiper 
                                spaceBetween={20}
                                slidesPerView={'auto'}
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.mainapge__actual_next',
                                    prevEl: '.mainapge__actual_prev'
                                }} 
                                className="mainpage__actual_slider">
                                    {
                                        news.actual.map((article, i) => 
                                            <SwiperSlide>
                                                <Card key={i} article={article} type='title-bottom'></Card>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </section>
                            {
                                news.bigCategories.map((category, i) => 
                                    <section key={i} className="mainpage__category mainpage__bordered_block">
                                        <h3 className='mainpage__title'>{category.title}</h3>
                                        <div className="mainpage__category_news">
                                            <Card article={category.news[0]} type='img-down'></Card>
                                            <div className="mainpage__category_list">
                                                {
                                                    category.news.map((article, i) => {
                                                        if (i > 0) {
                                                            return <Card key={i} article={article} type='title-right'></Card>
                                                        }
                                                    }
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </section>
                                )
                            }
                            {
                                news.smallCategories.map((categoriesList, i) => {
                                    return <section key={i} className="mainpage__categories_list">
                                        {
                                            categoriesList.map((category, i) => {
                                                return <div key={i} className="mainpage__category_compilation">
                                                    <h3 className='mainpage__title'>{category.title}</h3>
                                                    <div className="mainpage__category_compilation_news">
                                                        <Card article={category.news[0]} type='title-bottom-ns'></Card>
                                                        {
                                                            category.news.map((article, i) => {
                                                                if (i > 0) {
                                                                    return <Card key={i} article={article} type='only-title'></Card>
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            })
                                        }   
                                    </section>  
                                }
                                )
                            }
                            <section className="mainpage__authors">
                                <div className='mainpage__title'>
                                    <h3>Авторы</h3>
                                    <div className="mainpage__slider_nav">
                                        <button className="mainpage__slider_nav_btn mainpage__slider_nav_btn_prev mainapge__authors_prev">
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16499 14.9385C0.761002 14.5345 0.761002 13.8795 1.16499 13.4755L6.6404 8.00008L1.16499 2.52467C0.761002 2.12068 0.761002 1.46568 1.16499 1.06169C1.56898 0.657697 2.22398 0.657697 2.62797 1.06169L8.83487 7.26859C9.23886 7.67258 9.23886 8.32757 8.83487 8.73156L2.62797 14.9385C2.22398 15.3425 1.56898 15.3425 1.16499 14.9385Z" fill="#222222"/>
                                            </svg>
                                        </button>
                                        <button className="mainpage__slider_nav_btn mainpage__slider_nav_btn_next mainapge__authors_next">
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16499 14.9385C0.761002 14.5345 0.761002 13.8795 1.16499 13.4755L6.6404 8.00008L1.16499 2.52467C0.761002 2.12068 0.761002 1.46568 1.16499 1.06169C1.56898 0.657697 2.22398 0.657697 2.62797 1.06169L8.83487 7.26859C9.23886 7.67258 9.23886 8.32757 8.83487 8.73156L2.62797 14.9385C2.22398 15.3425 1.56898 15.3425 1.16499 14.9385Z" fill="#222222"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <Swiper 
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.mainapge__authors_next',
                                        prevEl: '.mainapge__authors_prev'
                                    }} 
                                    className="mainpage__authors_slider">
                                    {
                                        news.authors.map((article, i) => 
                                            <SwiperSlide>
                                                <Card key={i} article={article} type='author'></Card>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </section>
                        </div>
                    </main>
                    <Timeline></Timeline>
                </div>
            </div>
        </div>  
    );
  }
  
  export default Mainpage;
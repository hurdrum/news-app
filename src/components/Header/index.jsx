import { React, useState } from 'react';
import { useEffect, useRef } from 'react';

import './index.scss';
import loginIcon from '../../assets/image/login-icon.svg';
import Modal from './modal';
import Search from '../SearchForm/Search';

const Login = ({formActive, setFormActive}) => {
    return (
        <button className="header__login" onClick={() => {setFormActive(true)}}>
            <div className="header__login_icon">
                <img src={loginIcon} alt="login" />
            </div>
            <span className="header__login_text">Войти</span>
        </button>
    )
}

const Profile = () => {
    const [isActionsOpen, setActionsOpen] = useState(false);

    window.addEventListener('click', function (e) {
        if (!e.target.closest('.header__profile_wrapper') && isActionsOpen) {
            setActionsOpen(false)
        }
    })

    return (
        <div className='header__profile_wrapper'>
            <div className="header__profile" onClick={() => { setActionsOpen(!isActionsOpen) }}>
                <div className="header__profile_avatar_wrapper">
                    <img src='https://rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg' alt="avatar" />
                </div>
                <div className="header__profile_name">Валера П.</div>
                <button className={isActionsOpen ? "header__profile_actions_btn header__profile_actions_btn_active" : "header__profile_actions_btn"}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.374359 0.443328C0.643686 0.174001 1.08035 0.174001 1.34968 0.443328L4.99995 4.0936L8.65022 0.443328C8.91955 0.174001 9.35621 0.174001 9.62554 0.443328C9.89487 0.712655 9.89487 1.14932 9.62554 1.41865L5.48761 5.55658C5.21828 5.82591 4.78162 5.82591 4.51229 5.55658L0.374359 1.41865C0.105031 1.14932 0.105031 0.712655 0.374359 0.443328Z" fill="#222222"/>
                    </svg>
                </button>
            </div>
            <div className={isActionsOpen ? "header__profile_actions header__profile_actions_active" : "header__profile_actions"}>
                <a href="/profile" className="header__profile_settings">Настройки</a>
                <button className="header__profile_exit">Выход</button>
            </div>
        </div>
        
    )
}

const Header = ({isAuth = false, categories = ['Политика', 'В мире', 'Экономика', 'Общество', 'Происшествия', 'Армия', 'Наука', 'Спорт', 'Культура', 
'Религия', 'Политика', 'В мире', 'Экономика', 'Общество', 'Происшествия', 
'Армия', 'Наука', 'Спорт', 'Культура', 'Религия']}) => {
    const [isNavbarActive, setNavbarActive] = useState(true);
    const [formActive, setFormActive] = useState(false);

    let profile = isAuth ? <Profile></Profile> : <Login formActive={formActive} setFormActive={setFormActive}></Login>

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (Math.abs(prevScrollpos - currentScrollPos) > 10) {
        setNavbarActive(prevScrollpos > currentScrollPos);
      }
      prevScrollpos = currentScrollPos;
    }

    const scrollRef = useRef();
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
        const onWheel = e => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollTo({
            left: el.scrollLeft + e.deltaY * 4,
            behavior: "smooth"
            });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <header>
            <Modal open={formActive} setOpen={setFormActive}></Modal>
            <div className="header__empty_space"></div>
            <div className={isNavbarActive ? "header__wrapper" : "header__wrapper header__wrapper_scrolled"}>
                <div className="header__content">
                    <div className="header__logo_row">
                        <div className="header__logo">
                            <a href="/">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_13_14)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22 0C34.1518 0 44 9.84852 44 22C44 25.5004 43.1809 28.8075 41.7283 31.744C40.5221 34.18 36.9482 33.9646 36.0524 31.4019L29.6981 13.2443C28.7414 10.5106 24.8348 10.5106 23.8781 13.2443L14.849 39.0488C14.1963 40.9114 11.9599 41.678 10.2833 40.62C4.105 36.7269 0 29.8433 0 22C0 9.84852 9.84817 0 22 0ZM31.765 37.0373C33.4191 38.504 33.0128 41.1744 30.9907 42.0835C28.2455 43.3158 25.2027 44 22 44C21.9776 44 21.952 44 21.9296 44C19.1332 43.9905 17.8246 40.5725 19.9075 38.7257L24.7356 34.4461C25.9066 33.4102 27.676 33.4102 28.8438 34.4461L31.765 37.0373Z" fill="#3D7FFF"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_13_14">
                                    <rect width="44" height="44" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <span className='header__logo_text'>Петербург онлайн</span>
                            </a>
                        </div>
                        <div className="header__actions">
                            <Search></Search>
                            { profile }  
                        </div>         
                    </div>
                    <div className="header__tags_row">
                        <div className="header__company">Новости</div>
                        <nav ref={scrollRef}>
                            <ul className="header__tags">
                                {
                                    categories.map((category, i) => {
                                        return <li key={i}><a href={`/search?category=${category}`} className="header__tag">{category}</a></li>
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
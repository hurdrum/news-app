import React, { useState } from 'react';
import { setState } from 'react';
import { useEffect, useRef, setActive } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './index.scss' 

const Profile = ({profile = {
    name: 'Петя',
    surname: 'Абобин',
    password: 'aboba123',
    email: 'aboba123@gmail.com',
    photo: 'images/article-photo-ex.png',
    passwordCheck: 'aboba123'
}}) => {

    const [profileData, setProfileData] = useState(profile)
    // function saveChanges(e) {
    //     let data = Object.fromEntries(new FormData(e.target).entries());
    //     data.photo = profilePhoto
    //     setProfileData(data)     
    // }

    const [profilePhoto, setProfilePhoto] = useState(profile.photo);
    function profilePhotoChange(e) {
        console.log(e.target.files);
        setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    }

    const photoInput = useRef()

    function uploadProfilePhoto() {
        const btn = photoInput.current;
        btn.click();
    }

    const [errorState, setErrorState] = useState('error_password')
    const [validate, setValidate] = useState({
        email: true,
        password: true, 
        passwordsMatch: true,
        notEmpty: true
    })
    
    const handleSubmit = (event) => {
        let data = Object.fromEntries(new FormData(event.target).entries());

        let notEmpty = true;
        Object.keys(data).map(key => {
            if (!data[key].length) {
                notEmpty = false;
            }
        });

        let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        let myMail = data.email;
        let mailValidate = re.test(myMail);

        let passwordValidate = true;
        let passwordMatch = true;

        let passwordFirst = data.password
        let passwordSecond = data.password_2;
        if (passwordFirst.length < 7) {
            passwordValidate = false;
        } else if (passwordFirst !== passwordSecond) {
            passwordMatch = false;
        }
    
        setValidate({...validate, email: mailValidate, notEmpty: notEmpty, password: passwordValidate, passwordsMatch: passwordMatch});
        if (mailValidate && passwordValidate && passwordMatch) {
            setProfileData(data)  
        }
    }

    return (
        <div className='wrapper'>
            <div className="profile__container">
                <h1 className="profile__title">Настройка профиля</h1>
                <div className="profile__info">
                    <div className="profile__info__left">
                        <div className="profile__info__left__text">
                            <h6 className='profile__info__left__text-title'>{profileData.name} {profileData.surname}</h6>
                            <p className="profile__info__left__text-email">{profileData.email}</p>
                        </div>
                        <button className='profile__info__left__btn-logout'>Выход</button>
                    </div>
                    <div className="profile__info__right">
                        <div className="profile__info__right__profile-picture">
                            <div className="profile__info__right__profile-picture__photo">
                                <img src={profilePhoto} alt="profile picture" />
                            </div>
                            <button className='profile__info__right__profile-picture__btn-change' onClick={(e) => uploadProfilePhoto()}>Изменить</button>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e)}} className="profile__info__right__form">
                            <input type="file" name="photo" id="photo" accept="image/*" onChange={profilePhotoChange} ref={photoInput} className='input__hidden'/>
                            <input maxLength={60} className={validate.email ? 'profile__info__right__form__input' : 'profile__info__right__form__input profile__info__right__form__input__error'} name='email' type='email' placeholder='E-mail *' defaultValue={profileData.email} />
                            <input maxLength={25} className='profile__info__right__form__input' name='name' type='text' placeholder='Имя *' defaultValue={profileData.name} />
                            <input maxLength={25} className='profile__info__right__form__input' name='surname' type='text' placeholder='Фамилия' defaultValue={profileData.surname} />
                            <input className={validate.password && validate.passwordsMatch ? 'profile__info__right__form__input' : 'profile__info__right__form__input profile__info__right__form__input__error'} name='password' type='password' placeholder='Пароль *' defaultValue={profileData.password}/>
                            { !validate.password && <div className="profile__login_form_error profile__login_form_error_psw">Пароль должен содержать не меньше 6 символов</div>}
                            { !validate.passwordsMatch && <div className="profile__login_form_error profile__login_form_error_psw">Пароли не совпадают</div>}
                            <input className={validate.password && validate.passwordsMatch ? 'profile__info__right__form__input' : 'profile__info__right__form__input profile__info__right__form__input__error'} name='password_2' type='password' placeholder='Пароль еще раз *' defaultValue={profileData.passwordCheck}/>
                            <input type="submit" value="Сохранить данные" className='profile__info__right__form__submit'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
import React, {useState} from 'react';
import './index.scss';

const Modal = ({open, setOpen}) => {
    const [type, setType] = useState('login');
    const [validate, setValidate] = useState({
        email: true,
        password: true, 
        passwordsMatch: true,
        notEmpty: true
    })

    const types = {
        login: {
            title: 'Войти',
            submit: 'Войти',
            change: {
                text: 'Зарегистрироваться',
                type: 'signup'
            }
        },
        signup: {
            title: 'Регистрация',
            submit: 'Зарегистрироваться',
            change: {
                text: 'Войти',
                type: 'login'
            }
        },
        forgot: {
            title: 'Забыли пароль?',
            submit: 'Восстановить пароль',
            change: {
                text: 'Войти',
                type: 'login'
            }
        }
    }

    const changeType = (type) => {
        setType(type);
        setValidate({
            email: true,
            password: true, 
            passwordsMatch: true,
            notEmpty: true
        })
    } 

    let text = types[type];
 
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
        if (type === 'signup') {
            let passwordFirst = data.password
            let passwordSecond = data.password_2;
            if (passwordFirst.length < 7) {
                passwordValidate = false;
            } else if (passwordFirst !== passwordSecond) {
                passwordMatch = false;
            }
        }
        setValidate({...validate, email: mailValidate, notEmpty: notEmpty, password: passwordValidate, passwordsMatch: passwordMatch});
        if (mailValidate && notEmpty && passwordValidate && passwordMatch) {
            console.log(data)
        }
    }

    return (
        <div className={open ? 'header__login_form header__login_form_active' : 'header__login_form'} onClick={() => setOpen(false)}>
            <div className='header__login_form_content' onClick={(e) => e.stopPropagation()}>
                <div className='header__login_form_close' onClick={() => setOpen(false)}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.9866 10.5734L19.9149 17.6434L12.8449 10.5734L10.4883 12.93L17.5583 20L10.4883 27.07L12.8449 29.4267L19.9149 22.3567L26.9866 29.4267L29.3433 27.07L22.2733 20L29.3433 12.93L26.9866 10.5734Z" fill="#B9B9B9"/>
                    </svg>
                </div>
                <h2 className="header__login_form_title">{text.title}</h2>
                { !validate.notEmpty && <div className="header__login_form_error">Поля не могут быть пустыми</div>}
                { !validate.email && <div className="header__login_form_error">Проверьте правильность введенных данных</div>}
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e)}} className='header__login_form_form'>
                    {type === 'login' && 
                        <fieldset>
                            <input className={validate.email ? 'header__login_form_input' : 'header__login_form_input header__login_form_input_error'} name='email' type='text' placeholder='E-mail'/>
                            <input className='header__login_form_input' name='password' type='password' placeholder='Пароль'/>
                            <button className="header__login_form_forgot" onClick={() => changeType('forgot')}>Забыли пароль?</button>
                        </fieldset>
                    }
                    {type === 'signup' && 
                        <fieldset>
                            <input className={validate.email ? 'header__login_form_input' : 'header__login_form_input header__login_form_input_error'} name='email' type='text' placeholder='E-mail *'/>
                            <input className='header__login_form_input' name='name' type='text' placeholder='Имя'/>
                            <input className='header__login_form_input' name='surname' type='text' placeholder='Фамилия'/>
                            <input className={validate.password && validate.passwordsMatch ? 'header__login_form_input' : 'header__login_form_input header__login_form_input_error'} name='password' type='password' placeholder='Пароль *'/>
                            { !validate.password && <div className="header__login_form_error header__login_form_error_psw">Пароль должен содержать не меньше 6 символов</div>}
                            { !validate.passwordsMatch && <div className="header__login_form_error header__login_form_error_psw">Пароли не совпадают</div>}
                            <input className={validate.password && validate.passwordsMatch ? 'header__login_form_input' : 'header__login_form_input header__login_form_input_error'} name='password_2' type='password' placeholder='Пароль ещё раз *'/>
                        </fieldset>
                    }
                    {type === 'forgot' && 
                        <fieldset>
                            <p className="header__login_form_forgot_text">На указанную почту придет ссылка на восстановление пароля</p>
                            <input className={validate.email ? 'header__login_form_input' : 'header__login_form_input header__login_form_input_error'} name='email' type='text' placeholder='E-mail'/>
                        </fieldset>
                    }
                    <input type='submit' className='header__login_form_input header__login_form_submit' value={text.submit}/>
                </form>
                <button className='header__login_form_change_type_btn' onClick={() => changeType(text.change.type)}>{text.change.text}</button>
            </div>
        </div>
    )
}

export default Modal
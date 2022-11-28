import React from 'react';

export const Login = () => {
    
    return <form>
                <h1 className="title">Войти</h1>
                <label htmlFor='email'>Email</label>
                <input id="email" type="email" name="email" size="16" />
                <label htmlFor='password'>Пароль</label>
                <input id="password" type="password" name="password" size="16" />
                <a href='/' className="forget">Забыли пароль?</a>
                <input type="submit" value="Войти" />
                <div className="new-user_registration">
                    <h4>Новый пользователь?</h4>
                    <a href="./Registration.jsx" className="registration">Регистрация</a>
                </div>
            </form>
}


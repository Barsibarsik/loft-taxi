import React from 'react';

export const Registration = () => {
    return <form>
                <h1 className="title">Регистрация</h1>
                <label htmlFor='email'>Email*</label>
                <input id="email" type="email" name="email" size="16" />
                <label htmlFor='name'>Как вас зовут?*</label>
                <input id="name" type="name" name="name" size="16" />
                <label htmlFor='password'>Придумайте пароль*</label>
                <input id="password" type="password" name="password" size="16" />
                <input type="submit" value="Зарегистрироваться" />
                <div className="already_registration">
                    <h4>Уже зарегистрированы?</h4>
                    <a href="./Map.jsx" className="registration">Войти</a>
                </div>
            </form>
}
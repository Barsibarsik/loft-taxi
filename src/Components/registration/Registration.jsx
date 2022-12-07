import React from "react";
import "./index.css";

export default function RegForm({setPage}) {
    return (
        <div className="regForm">
            <form>
                <h1 className="title">Регистрация</h1>
                <label htmlFor='email'>Email*</label>
                <input id="email" type="email" name="email" size="16" />
                <label htmlFor='name'>Как вас зовут?*</label>
                <input id="name" type="name" name="name" size="16" />
                <label htmlFor='password'>Придумайте пароль*</label>
                <input id="password" type="password" name="password" size="16" />
                <button type="submit" value="Зарегистрироваться" className="button">Зарегистрироваться</button>
                <div className="already_registration">
                    <p className="question">Уже зарегистрированы?</p>
                    <a onClick={() => setPage(true)} type="submit" className="registration">Войти</a>
                </div>
            </form>
        </div>
    );
}
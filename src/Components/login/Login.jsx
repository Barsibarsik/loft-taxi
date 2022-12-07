import React, { useState } from "react";
import "./index.css";

export default function LoginForm({ setPage, setLogin }) {
    const [passwordText, setPasswordText] = useState("");
    const [loginText, setLoginText] = useState("");
    
    const handleSubmit = () => {
        (passwordText === "1234test" && loginText === "test@mail.com") ? setLogin(true) : (alert("Неверные логин и пароль") && setLogin(false));
    };
    
    return (
        <div className="loginForm">
            <form>
                <h1 className="title">Войти</h1>
                <label htmlFor='email'>Email</label>
                <input id="email" type="email" name="email" value={loginText} onChange={(e) => setLoginText(e.target.value)} size="16" />
                <label htmlFor='password'>Пароль</label>
                <input id="password" type="password" name="password" value={passwordText} onChange={(e) => setPasswordText(e.target.value)} size="16" />
                <a href='/' className="forget">Забыли пароль?</a>
                <button onClick={() => handleSubmit()} type="submit" value="Войти" className="button">Войти</button>
                <div className="new-user_registration">
                    <p className="question">Новый пользователь?</p>
                    <a onClick={() => setPage(false)} className="registration">Регистрация</a>
                </div>
            </form>
        </div>
    );
}


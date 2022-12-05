import React, { useState } from "react";
import "./index.css";

export default function LoginForm({ setPage, setLogin }) {
    const [loginText, setLoginText] = useState("");

    const handleSubmit = () => {
        loginText === "test" ? setLogin(true) : alert("Неверный логин");
    };
    
    return (
        <div className="loginForm">
            <form>
                <h1 className="title">Войти</h1>
                <label htmlFor='email'>Email</label>
                <input id="email" type="email" name="email" size="16" />
                <label htmlFor='password'>Пароль</label>
                <input id="password" type="password" name="password" value={loginText} onChange={(e) => setLoginText(e.target.value)} size="16" />
                <a href='/' className="forget">Забыли пароль?</a>
                <input onClick={() => handleSubmit()} type="submit" value="Войти" />
                <div className="new-user_registration">
                    <h4>Новый пользователь?</h4>
                    <button onClick={() => setPage(2)} className="registration">Регистрация</button>
                </div>
            </form>
        </div>
    );
}


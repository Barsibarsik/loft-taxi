import React from "react";
import "./index.css";

export default function Profile() {

return <form className="profileForm">
            <h1 className="title-map">Профиль</h1>
            <h4>Введите платёжные данные</h4>
            <label htmlFor="name">Имя</label>
            <input id="name" type="name" name="name" size="16" />
            <button type="submit" value="Сохранить" className="button-profile">Сохранить</button>
        </form>
}
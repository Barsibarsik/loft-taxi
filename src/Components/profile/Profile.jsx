import React from "react";
// import ProfileDone from "../profile-done/ProfileDone";

export default function Profile() {

return <form>
            <h1 className="title">Профиль</h1>
            <h4>Введите платёжные данные</h4>
            <label htmlFor="name">Имя</label>
            <input id="name" type="name" name="name" size="16" />
            <button >Сохранить</button>
        </form>
}
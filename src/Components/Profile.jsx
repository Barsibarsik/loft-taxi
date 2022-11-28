import React from 'react';

export const Profile = () => {
    return <form>
                <h1 className="title">Профиль</h1>
                <h4>Введите платёжные данные</h4>
                <label htmlFor="name">Имя</label>
                <input id="name" type="name" name="name" size="16" />
                <input type="submit" value="Сохранить" />
                
            </form>
}
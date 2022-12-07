import React from 'react';
import "./index.css";


export default function OrderMake() {
     return <form className="orderMakeForm"> 
                <h1 className="title">Форма заказа</h1>
                <button type="submit" value="Заказать" className="button">Заказать</button>
            </form>
}
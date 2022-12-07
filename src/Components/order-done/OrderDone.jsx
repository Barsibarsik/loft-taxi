import React from 'react';
import "./index.css";

export default function OrderDone() {
    return <div>
                <h1 className="title">Заказ размещён</h1>
                <p>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                <button>Сделать новый заказ</button>
            </div>
}
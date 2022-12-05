import React, { useState } from "react";
import Profile from "../Components/profile/Profile";
import OrderMake from "../Components/order-make/OrderMake";

export default function Map({ setLogin }) {
    const [modal, setModal] = useState("map");
    
    return (
        <div>
            <header>
                <button onClick={() => setModal("map")}>Карта</button>
                <button onClick={() => setModal("profile")}>Профиль</button>
                <button onClick={() => setLogin(false)}>Выйти</button>
            </header>
            
            {modal === "map" ? < OrderMake /> : modal === "profile" ? < Profile /> : null}
            
        </div>
    );
}




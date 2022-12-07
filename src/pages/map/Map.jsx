import React, { useState } from "react";
import Profile from "../../Components/profile/Profile";
import OrderMake from "../../Components/order-make/OrderMake";
import "./index.css";
import { ReactComponent as Logo2 } from "./Logo2.svg";

export default function Map({ setLogin }) {
    const [modal, setModal] = useState("map");
    
    return (
        <div className="map">
            <header className="header">
                <div className='logo-block2'>
                    <Logo2 className="logo2"/>
                </div>
                <ul className="header_list">
                    <li className="header_link"><button className="header_link-button" onClick={(e) => setModal("map")}>Карта</button></li>
                    <li className="header_link"><button className="header_link-button" onClick={(e) => setModal("profile")}>Профиль</button></li>
                    <li className="header_link"><button className="header_link-button" onClick={() => setLogin(false)}>Выйти</button></li>
                </ul>
            </header>
            <div className="map-block">            
                {modal === "map" ? < OrderMake /> : modal === "profile" ? < Profile /> : null}
            </div>
        </div>
    );
}




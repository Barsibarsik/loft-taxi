import React, { useState } from 'react';
import LoginForm from "../../Components/login/Login";
import RegForm from "../../Components/registration/Registration";
import "./index.css";
import { ReactComponent as Logo } from "./Logo.svg";

export default function Autarization({setLogin}) {
    const [page, setPage] = useState(true);

    return (
        <div className='autorization'>
            <div className='logo-block'>
                <Logo className="logo"/>
            </div>
            <div className='auto-block'>{page === true ? < LoginForm setPage={setPage} setLogin={setLogin} /> : < RegForm setPage={setPage} />}</div>
        </div>
    );
}




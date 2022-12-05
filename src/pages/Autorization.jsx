import React, { useState } from 'react';
import LoginForm from "../Components/login/Login";
import RegForm from "../Components/registration/Registration";

export default function Autarization({setLogin}) {
    const [page, setPage] = useState(1);

    return <div>{page === 1 ? < LoginForm setPage={setPage} setLogin={setLogin} /> : 
            < RegForm setPage={setPage} />}</div>;
}




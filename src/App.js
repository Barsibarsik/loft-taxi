import React, { useState } from 'react';
import './App.css';
import Map from './pages/Map';
import Autorization from './pages/Autorization';

function App() {
  const [login, setLogin] = useState(false);

  return <div className="App">
            {login ? < Map setLogin={setLogin} /> : < Autorization setLogin={setLogin} />}
        </div>;
}

export default App;


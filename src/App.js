import React from 'react';
import './App.css';

import { Map } from './Components/Map';
import { Login } from './Components/Login';
import { Profile } from './Components/Profile';
import { Registration } from './Components/Registration';
import { OrderDone } from './Components/OrderDone';
import { ProfileDone } from './Components/ProfileDone'


const PAGES = {
  map: <Map/>,
  profile: <Profile/>,
  login: <Login/>,
  registration: <Registration/>,
  orderDone: <OrderDone/>,
  profileDone: <ProfileDone/>,
   
}

class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => {this.navigateTo("map")}}>
                  Карта
                </button>
              </li>
              <li>
                <button onClick={() => {this.navigateTo("profile")}}>
                  Профиль
                </button>
              </li>
              <li>
                <button onClick={() => {this.navigateTo("login")}}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    )
  };
}

export default App;

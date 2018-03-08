import React, {Component} from 'react';
import {logo} from './SmallLogo.jpg';
import './App.css';
import {header} from './header/header';
import {footer} from './footer/footer';
import {chatBox} from './chatBox/chatBox';
import MainPage from './main/mainPage';
import {sideBar} from './sidebar/sideBar'; 


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="second">
          <img src={logo} className="third" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
  // ReactDOM.render(App, document.getElementById('root'));
}


export class UserInput {
  render() {
    return (
  <body>
    <MainPage />
  </body>
    );
  }
}

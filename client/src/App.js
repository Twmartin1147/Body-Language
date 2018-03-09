import React, {Component} from 'react';
import {logo} from './SmallLogo.jpg';
import './App.css';
import {header} from './header/header';
import {footer} from './footer/footer';
import {chatBox} from './chatBox/chatBox';
import MainPage, {Return} from './main/mainPage';
import {sideBar} from './sidebar/sideBar'; 


export default class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      // <div className="App">
      //   <header className="second">
      //     <img src={logo} className="third" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      // </div>
      
        <MainPage />
      
        
      
    );
  }
  // ReactDOM.render(App, document.getElementById('root'));
}
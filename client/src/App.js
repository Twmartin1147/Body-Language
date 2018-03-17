import React, {Component} from 'react';
import './App.css';
import Header from './header/header';
import {footer} from './footer/footer';
import {chatBox} from './chatBox/chatBox';
import MainPage, {Return} from './main/mainPage';
import Footer from './footer/footer'



export default class App extends Component {
  

  render() {
    return (
  
         <div>
            <div>
                <Header />
            </div>    
              <div>
                <MainPage />
            </div>
         </div>
        
           
    );
  }
  // ReactDOM.render(App, document.getElementById('root'));
}
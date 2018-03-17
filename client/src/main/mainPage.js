import TextInput from './textInput';
// import {TextReturn} from './textReturn';
import React from 'react';
import mainPage from './mainPageCSS/mainPage.css'
import SideBar from '../sidebar/sideBar.js'

export default class MainPage extends React.Component {



    render() {
        return (
            <div className="grid-container2">
                <div className="grid-item2">
                <TextInput />
            </div>
                <div className="grid-item2">
                <SideBar />
            </div>
        </div>
        );
    }
}
// ReactDOM.render(MainPage, document.getElementById('root'));




 

 
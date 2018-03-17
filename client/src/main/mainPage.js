import TextInput from './textInput';
import {TextReturn} from './textReturn';
import {logo} from '../logo/logo';
import React from 'react';

export default class MainPage extends React.Component {

    

    render() {
        return (
        <div className="container">
            <div className="forms">
                <TextInput />
            </div>
            <div className="forms">
                <TextReturn />
            </div>
        </div>
        );
    }
}
// ReactDOM.render(MainPage, document.getElementById('root'));




 

 
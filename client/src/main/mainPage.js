import {TextInput} from './textInput'
import {TextReturn} from './textReturn'
import {textTranslation} from './textTranslation';
import {logo} from '../logo/logo';
import React from 'react';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <TextInput />
            </div> 
        );
    }

// ReactDOM.render(MainPage, document.getElementById('root'));
}
    

export default {MainPage} 
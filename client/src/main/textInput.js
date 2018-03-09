import { api } from './api.js';
import React from 'react';


class TextInput extends React.Component {
    render() {
        return (
            <div className="container">
                <form className="mainForm">
                    Input a sentence and we will figure out how you are feeling, and add some Body Language
				<input type="text" className="" id="userText"/>
                </form>
                <button id="emotionCheck" onClick={function() {
                    document.getElementById("inputReturn").value = document.getElementById("userText").value
                }}>Emotion Check</button>    
            </div>
        );
    }
    // ReactDOM.render(TextInput, document.getElementById('root'));
}



export { TextInput }
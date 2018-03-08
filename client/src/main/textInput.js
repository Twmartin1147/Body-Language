import {api} from './api.js';
import React from 'react';


class TextInput extends React.Component {
    render() {
        return (
            <div class="container">
                <form class="mainForm">
                    Input a sentence and we will figure out how you are feeling, and add some Body Language:
				<input type="text" class="" id="userText"></input>
                </form>
                <button id="emotionCheck" onClick={api}>Emotion Check</button>    
            </div>
                );
            }
    // ReactDOM.render(TextInput, document.getElementById('root'));
    }



export {TextInput}
// import { api } from './api.js';
import React from 'react';
// import axios from 'axios';
import watson from 'watson-developer-cloud';
import { Jumbotron } from 'watson-react-components/dist/components';
import App from './App.js'
const ToneUsername = "a024676d-1867-42c5-9fac-5908cc52cf02"
const Tonepassword = "JEK6jBlRLqrN"
const tone_analyzer = watson.tone_analyzer({
    username: ToneUsername,
    password: Tonepassword,
    version: 'v3',
    version_date: ''
});


class TextInput extends React.Component {
    render() {
        return (
            <div className="container">
                <Jumbotron
                    serviceName="Demo title"
                    repository="https://github.com/watson-developer-cloud/react-components"
                    documentation="https://www.ibm.com/watson/developercloud/doc/visual-recognition/"
                    apiReference="https://www.ibm.com/watson/developercloud/visual-recognition/api/v3"
                    startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/visual-recognition/"
                    version="Beta"
                    serviceIcon="images/service-icon.svg"
                    description="BodyLanguage will help discerene textbetween people. Too often dowe run into miscommunicationbecase of the emoionlessness of standard text."
                />
                <form className="mainForm">
                    Input a sentence and we will figure out how you are feeling, and add some Body Language
				<input type="text" className="" id="userText"/>
                </form>
                    <button id = "emotionCheck" onClick = {
                       function thisText() {
                        let text = document.getElementById("inputReturn").value = document.getElementById("userText").value
                        tone_analyzer.tone({text: text}), function(err, tone) {}
                            }
                        }
                > Emotion Check </button>    
            </div>
        );
    }}

    export {TextInput}
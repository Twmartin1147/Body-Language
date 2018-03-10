// import { api } from './api.js';
import React from 'react';
// import axios from 'axios';
// import watson from 'watson-developer-cloud';
import { Jumbotron } from 'watson-react-components/dist/components';
import App from './App.js'



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
                <button id="emotionCheck" onClick={function() {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open("POST", "/api/tone", true);
                    xhttp.send(document.getElementById("userText").value);
                    var sentences = document.getElementById("userText").value
                    var documentTones = App.document_tone
                    var thresholds = App.threshold
                    var sentenceTones = App.sentenceTones
                    var AppOutput = App(documentTones, sentences, thresholds, sentenceTones)

                    function OutputReturn (sentences, AppOutput) {
                            
                    }

                    document.getElementById("inputReturn").value = document.getElementById("userText").value
                     
                }}>Emotion Check</button>    
            </div>
        );
    }
    // ReactDOM.render(TextInput, document.getElementById('root'));
}



export { TextInput }
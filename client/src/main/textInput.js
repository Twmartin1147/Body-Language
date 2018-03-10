import { api } from './api.js';
import React from 'react';
import axios from 'axios';
import watson from 'watson-developer-cloud';
import { Header, Jumbotron, Code, Tabs } from 'watson-react-components/dist/components';



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
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
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
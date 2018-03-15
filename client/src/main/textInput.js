// import { api } from './api.js';
import React from 'react';
// import axios from 'axios';
import watson from 'watson-developer-cloud';
import { Jumbotron } from 'watson-react-components/dist/components';
import App from './App.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";




class TextInput extends React.Component {
    componentDidMount() {
        var params = {
            'tone_input': document.getElementById("userText").value,
            'content_type': 'application/json'
        };
        API.getTone(params)
    }

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
				<input type="text" className="" id="userText" />
                    </form>
                    
                        <button id="emotionCheck" onClick={
                            function thisText() {
                            <Router>
                                <Switch>
                                {document.getElementById("inputReturn").value = document.getElementById("userText").value}
                                <Route exact path="/tone_analyzer/tone/tone_input" 
                                
                                 />
                                </Switch>
                            </Router>
                       }
                            
                        }
                        > Emotion Check </button>
                   
                
            </div>
        );
    }
}                    

export default TextInput
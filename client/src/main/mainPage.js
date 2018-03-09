import {TextInput} from './textInput';
import {TextReturn} from './textReturn';
import {textTranslation} from './textTranslation';
import {logo} from '../logo/logo';
import React from 'react';
import { Header, Jumbotron, Code, Tabs, InputWithButton } from 'watson-react-components/dist/components';

export default class MainPage extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="forms">

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

                    <InputWithButton
                        onSubmit={(e) => {
                            this.setState({ submitText: e.target.value });
                        }}
                        placeholder="Input some text here"
                    />
            </div>
            <div className="forms">
                <TextReturn />
            </div>
        </div>
        );
    }
}
// ReactDOM.render(MainPage, document.getElementById('root'));




 

 
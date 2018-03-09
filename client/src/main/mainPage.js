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




 

 
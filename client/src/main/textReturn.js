import React from 'react';
import TextInput from './textInput'
import textReturn from './mainPageCSS/textReturn.css'


class TextReturn extends React.Component {
    render() {
        return (
            <div className="container">
				<textarea type="text"  id="inputReturn"/> 
            </div>
                );
    }
}


export { TextReturn }
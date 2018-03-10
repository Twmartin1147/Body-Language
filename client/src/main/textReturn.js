import React from 'react';
import {api} from './api.js';


class TextReturn extends React.Component {
    render() {
        return (
            <div className="container">
				<input type="text" className="" id="inputReturn"/> 
            </div>
                );
    }
}


export { TextReturn }
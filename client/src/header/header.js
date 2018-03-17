import login from './login';
import socialMedia from './socialMedia';
import Logo from  '../logo/logo';
import header from './header.css';
import React from 'react'
import {LoginControl} from './loginControl'
export default class Header extends React.Component {
    render() {
        return (
            <header className="grid-container">
            <div className="grid-item">
                <h1 className="logo-container">
                    <b><Logo /></b>
                    <h3>Show your emotions through text</h3>
                </h1>
            </div>
                <div className="grid-item">
                <h6>
            <LoginControl />
                </h6>
            </div>
            </header>
        );
    }
};
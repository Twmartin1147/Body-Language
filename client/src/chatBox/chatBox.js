import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';

class Chatbox extends Component {

    constructor(){
        super()
        this.state = {
            showComments: false
        }
    }

    toggleComments(){
        console.log("toggle comments");
        this.setState({
            showComments: !this.state.showComments
        })
    }

    render() {
        return (
            <div onClick={this.toggleComments.bind(this)} className="Chatbox" style={{color:'#fff', position:'fixed', bottom:0, right:0, background:'#000', width:320, padding:6}}>
                <Widget />
            </div>
        );
    }
}


export default Chatbox;
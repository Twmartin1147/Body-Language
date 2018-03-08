import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';
import { Comments } from './'
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
        if (this.state.showComments == true)
            return <Comments /> 


        return (
            <div onClick={this.toggleComments.bind(this)} className="Chatbox" style={style.container}>
                <Widget />
            </div>
        );
    }
}

const style = {
    container: {
        color: '#fff', 
        position: 'fixed', 
        bottom: 0, 
        right: 0, 
        background: '#000', 
        width: 320, 
        padding: 6
    }
}



export default Chatbox;
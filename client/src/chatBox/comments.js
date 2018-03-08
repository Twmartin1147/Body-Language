import React, {Component} from 'react'

export default (props) => {
        return (
            <div style={style.container}>
                <div style={{color: '#fff', width:320, padding:6, background:'#000'}}>
                    This is the Widget
                </div>
                Comments Component!
            </div>
        )
}

const style = {
    container: {
        zIndex: 100,
        height: 650,
        width: 320,
        position: fixed,
        top: 0,
        right: 0,
        background: '#f9f9f9'
    }
}
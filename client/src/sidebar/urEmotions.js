import React from 'react'
import Emotions from './urEmotions.css'


class YourEmotions extends React.Component {
    render() {
        return(
            <ul>
                <li className="Anger">Anger</li>
                <li className="Disgust">Disgust</li>
                <li className="Fear">Fear</li>
                <li className="Joy">Joy</li>
                <li className="Sadness">Sadness</li>
            </ul>
        
        )
    }
}

export {YourEmotions}

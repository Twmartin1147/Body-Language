import React from 'react';
// import axios from 'axios';
import watson from 'watson-developer-cloud';
// import { Jumbotron } from 'watson-react-components/dist/components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";
import textReturn from './mainPageCSS/textReturn.css'




class TextInput extends React.Component {
    
    constructor(props){
       super(props)
       this.state = {
           value: '',
           emotion: null,
            
    }

       this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //     text: {}
    // }
    // componentDidMount() {
    //     console.log(API.userInput(this.props))
        // API.userInput(this.props.)
        //     .then(res => this.setState({ text: document.getElementById("userText").value }))
    
    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            value : value
        });
    }

    handleSubmit(event) {
        let self = this;
        API.userInput(this.state.value).then(function(res) {
            console.log(res.data.document_tone)


            let watsonRes = {};
            let watsonScore = {};
            let toneScore = [];
            let toneRes = [];
            let numTones;
            
            let tone_categories = res.data.document_tone.tone_categories;
            numTones = JSON.stringify(tone_categories[0].tones[0].tone_name.length, null, 2);

            for (var i = 0; i < numTones; i++) {

                watsonRes = JSON.stringify(tone_categories[0].tones[i].tone_name, null, 2);

                toneRes.push(watsonRes);

            }

            i = 0;

            for (i = 0; i < numTones; i++) {

                watsonScore = parseFloat(tone_categories[0].tones[i].score);

                toneScore.push(watsonScore);

            }


            var result = Math.max(...toneScore);



            console.log(result);

            console.log(toneRes);

            console.log(toneScore);

            console.log(toneScore.indexOf(result))

            console.log(toneRes[toneScore.indexOf(result)])

            var watEmo = toneRes[toneScore.indexOf(result)]

        console.log(watEmo);
        self.setState({
            emotion: watEmo.replace(/"/g, "")
        });

        

        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form className="mainForm" onSubmit={this.handleSubmit}>
                        Input a sentence and we will figure out how you are feeling, and add some Body Language
				<textarea type="text"  id="userText" onChange={this.handleInputChange} />
                    <button id="emotionCheck" type="submit" onClick={function somefucntion() {
                        document.getElementById("inputReturn").value = document.getElementById("userText").value;
                    }}

                    > Emotion Check </button>
                    </form>   
                     
                    <div className="container">
                    <textarea type="text" className={this.state.emotion} id="inputReturn" />
                    </div>
            </div>
        );
    }
}                 

export default TextInput
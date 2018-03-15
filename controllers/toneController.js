var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
    username: 'a024676d-1867-42c5-9fac-5908cc52cf02',
    password: 'JEK6jBlRLqrN',
    version_date: 'v3',
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
});
var Tone = tone_analyzer.tone
module.exports = {
    toneInput: function (req, res) {console.log(arguments)
      console.log(req.params);
      res.json({});
        
    },
  handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    },

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    }

}
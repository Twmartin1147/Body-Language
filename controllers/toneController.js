var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var toneAnalyzer = new ToneAnalyzerV3({
    username: "a024676d-1867-42c5-9fac-5908cc52cf02",
    password: "JEK6jBlRLqrN",
    version_date: "2016-05-19",
    // url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
});




module.exports = {
 

    // post: function(req, res) {
    //     console.log(req)
    //     res.send(
    //     req.body.input
    //     )
    // },
    post: function (req, res, next) {
        toneAnalyzer.tone({
            language: 'en',
            source_type: 'text',
            accept_language: 'en',
            include_raw: false,
            text: req.body.input
        }, function (err, data) {
            if (err) {
                return next(err);
            }
            return res.json(data);
        });
    }
}
// //   handleInputChange = event => {
// //         const { name, value } = event.target;
// //         this.setState({
// //             [name]: value
// //         });
// //     },

// //     handleFormSubmit = event => {
// //         event.preventDefault();
// //         if (this.state.title && this.state.author) {
// //             API.saveBook({
// //                 title: this.state.title,
// //                 author: this.state.author,
// //                 synopsis: this.state.synopsis
// //             })
// //                 .then(res => this.loadBooks())
// //                 .catch(err => console.log(err));
// //         }
// //     }

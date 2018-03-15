


module.exports = {
 
    toneInput:function () {
         app.post('/api/tone')
            .type('form')
            .send({
                language: 'en',
                source_type: 'text',
                accept_language: 'en',
                include_raw: false,
                text: sampleTextTweets
            }).expect(200);
    }}

//   handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     },

//     handleFormSubmit = event => {
//         event.preventDefault();
//         if (this.state.title && this.state.author) {
//             API.saveBook({
//                 title: this.state.title,
//                 author: this.state.author,
//                 synopsis: this.state.synopsis
//             })
//                 .then(res => this.loadBooks())
//                 .catch(err => console.log(err));
//         }
//     }


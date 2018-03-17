import axios from "axios";

export default {
    getTone: function (search) {
        return axios.get(`/api/tone?query=${search}`).then(
            (res) => { console.log(res)}
        )
    },
    userInput: function(userInput) {
        console.log(userInput)
        return axios.post('/api/tone', {input: userInput})
    }
}
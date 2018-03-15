import axios from "axios";

export default {
    getTone: function (search) {
        return axios.get(`/api/tone?query=${search}`).then(
            (res) => { console.log(res)}
        )
    },
    userInput: function(text) {
        return axios.post('/api/tone')
    }
}
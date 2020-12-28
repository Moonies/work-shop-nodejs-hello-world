const axios = require('axios');

function getMessage() {
    return axios.get("http://104.236.50.54:8080/messages")
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        })

}
module.exports = { getMessage }
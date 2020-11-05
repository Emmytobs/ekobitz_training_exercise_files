const fs = require('fs');
const request = require('request');

const [ , , searchTerm] = process.argv;
request(`https://icanhazdadjoke.com/search?term=${searchTerm}`, function (error, response, body) {
    console.log(response);
});

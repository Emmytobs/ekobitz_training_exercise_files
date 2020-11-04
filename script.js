const fs = require('fs');
const axios = require('axios');

// async function showJoke(searchTerm) {
//     const response = await axios.get(`https://icanhazdadjoke.com/search?term=${searchTerm}`)
//     const data = await response.json();
//     console.log(data)
// }

// const [ , ,searchTerm] = process.argv
// showJoke(searchTerm);

axios.get('https://icanhazdadjoke.com/search?term=hipster')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
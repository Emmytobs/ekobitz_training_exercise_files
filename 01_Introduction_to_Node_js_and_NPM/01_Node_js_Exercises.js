const prompt = require('prompt')
const axios = require('axios');

async function fetchJokes (searchTerm) {
    try {
        const response = await axios.get(`https://icanhazdadjoke.com/search?term=${searchTerm}`);
        if (!response) 
            return console.log('Please check your internet connection');
        
            return response.data.results;
    } catch (error) {
        return error
    }
}

prompt.start()

prompt.get(['searchTerm'], (err, result) => {
    if (err) {
        return console.log('An Error Occured');
    }
    const { searchTerm } = result;
    const joke = await fetchJokes(searchTerm);
    if (!joke.length) 
        return console.log(`No joke with the search term '${searchTerm}'.`)
    
    console.log(joke[0])
})
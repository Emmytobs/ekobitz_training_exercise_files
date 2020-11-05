const express = require('express');
const app = express()

const PORT = 3000;
const itemRouter = require('./router')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/items', itemRouter)
app.get('/', (req, res) => {
    res.json('You have hit the root endpoint, go to the \'/items\' route to explore more')
})

app.listen(PORT, () => console.log('Server running on port ', PORT))
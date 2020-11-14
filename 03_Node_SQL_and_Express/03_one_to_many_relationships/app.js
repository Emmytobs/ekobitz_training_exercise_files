const express = require('express')
const app = express()

require('dotenv').config()
const gradRoutes = require('./routes/grads')
const offerRoutes = require('./routes/offers')

const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use('/graduates', gradRoutes)
app.use(offerRoutes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new Error('This route does not exist')
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    if(app.get('env') === 'development') {
        res.status(err.status || 500)
            .json({
                message: err.message || "Internal Server Error",
                error: err // send full error in development mode
            })
    } else {
        res.status(err.status || 500)
        .json({
            message: err.message || "Internal Server Error",
        })
    }
})

app.get('/', (req, res) => {
    res.send('This is the root route')
})

app.listen(PORT, () => console.log('Server listening on port,', PORT))
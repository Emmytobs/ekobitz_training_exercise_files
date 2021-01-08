const express = require('express');
const app = express();
const shoppingItems = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/items', (req, res) => {
    res.json(shoppingItems);
});

app.post('/items', (req, res) => {
    const { name, price } = req.body;
    const newItem = {
        id: shoppingItems.length + 1,
        name,
        price
    }
    shoppingItems.push(newItem)
    res.status(201).json(newItem);
});

app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = shoppingItems.find(item => item.id === id);
    if (!item) 
        return res.status(404).json('No item found')
    res.json(item);
});

app.patch('/items/:id', (req, res) => {
    const { id } = req.params;
    if (req.body.id) 
        return res.status(400).json('Invalid update');
    const item = shoppingItems.find(item => item.id === id);
    const updates = Object.keys(req.body);
    updates.forEach(update => {
        item[update] = req.body[update];
    })
    res.json(item);
})

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = shoppingItems.find(item => item.id === id);
    if (!item) 
        return res.status(404).json('No item found');
    
    delete shoppingItems[item];
    res.json(item);
})

const { PORT } = process.env;

app.listen(PORT, () => console.log('Server running on ', PORT))
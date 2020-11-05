const express = require('express');
const itemRouter = express.Router()

const items = [
    {id: 2, name: "Item 2"}
]

itemRouter.route('/')
    .get((req, res) => {
        res.json({
            itemCount: items.length,
            items
        })
    })
    .post((req, res) => {
        const { body } = req;
        if('id' in body) {
            return res.status(400).json({ message: "Update failed. Field cannot be updated" })
        }
        if(!body.name)
            return res.status(400).json({ message: "Please input the item name" })
        
        const newItem = {
            id: items.length + 1,
            name: body.name
        }
        items.push(newItem);
        res.status(201).json(newItem)
    })

itemRouter.route('/:id')
    .get((req, res) => {
        const { id } = req.params;
        const isNotANumber = !Number(id)
        if(isNotANumber) 
            return res.status(400).json({ message: "Missing parameter: item id. Please specify a valid id." })
        const itemToSend = items.find(item => item.id === Number(id))
        if(!itemToSend)
            return res.status(404).json({ message: "Item does not exist" })
        res.json(itemToSend)
    })
    .patch((req, res) => {
        const { id } = req.params;
        // Check if id is a number
        const isNotANumber = !Number(id)
        if(isNotANumber)
            return res.status(400).json({ message: "Missing parameter: item id. Please specify a valid id." })
        // body contains the changes to be made
        const { body: updatedFields } = req;
        if('id' in updatedFields) {
            return res.status(400).json({ message: "Update failed. Field cannot be updated" })
        }
        // Find the item to update
        let itemToUpdate = items.find(item => item.id === Number(id))
        if(!itemToUpdate)
            return res.status(404).json({ message: "Item does not exist" })

        // Find the index of the item to update
        const indexOfItemToUpdate = items.findIndex(item => item.id === itemToUpdate.id)
        // Spread the updates on the specified item, while keeping the fields not specified in the updatedFields object unchanged
        items[indexOfItemToUpdate] = {...itemToUpdate, ...updatedFields}
        res.json(items[indexOfItemToUpdate]);
    })
    .delete((req, res) => {
        const { id } = req.params;
        const isNotANumber = !Number(id)
        if(isNotANumber) 
            return res.status(400).json({ message: "Missing parameter: item id. Please specify a valid id." })
        // const itemToDeleteIndex = items.findIndex(item => item.id === Number(id))
        const itemToDeleteIndex = items.findIndex(item => item.id === Number(id))
        if(!itemToDeleteIndex)
            return res.status(404).json({ message: "Item does not exist" })
        items.splice(itemToDeleteIndex, 1);
        res.json();
    })

module.exports = itemRouter;
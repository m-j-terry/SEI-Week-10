require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const React = require ('react')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Item = require('./models/item')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true}))
mongoose.connect(process.env.MONGO_URI)


app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// INDEX
app.get('/items', async (req, res) => {
    try {
        const foundItems = await Item.find({})
        res.render('items/Index', {items: foundItems})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


// NEW
app.get('/items/:id', (req, res) => {
    
})


// DELETE
app.delete('/items/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


// UPDATE 
app.put('/items/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({message: error.message})
    }
})



// CREATE
app.post('/items', async (req, res) => {
    try {
        const createdItem = await Item.create(req.body)
        res.redirect(`/items/${createdItem._id}`)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})



// EDIT
app.get('/items/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({message: error.message})
    }
})



// SHOW
app.get('/items/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({message: error.message})
    }
})







app.listen(PORT, () => {
    console.log(`port working on ${PORT}`)
})
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
app.get('/items/new', (req, res) => {
    res.render('items/New')
})


// DELETE
app.delete('/items/:id', async (req, res) => {
    try {
        await Item.findOneAndDelete({"_id": req.params.id})
        .then(() => {
            res.redirect('/items')
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


// UPDATE 
app.put('/items/:id', async (req, res) => {
    try {
        await Item.findOneAndUpdate({'_id': req.params.id},
        req.body, { new: true})
        .then(() => {
            res.redirect(`/items/${req.params.id}`)
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})



// CREATE
app.post('/items', async (req, res) => {
    try {
        //the if else block was my attempt to run error handling for the name and price fields; it does not appear to function as I'd hoped.
        if (req.body.price !== Number || req.body.name !== String) {
            res.redirect('/items/error')
        } else {
        const createdItem = await Item.create(req.body)
        res.redirect(`/items/${createdItem._id}`)
        }
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})



// EDIT
app.get('/items/:id/edit', async (req, res) => {
    try {
        const foundItem = await Item.findOne({_id: req.params.id})
        res.render('items/edit', {
            item: foundItem
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})



// SHOW
app.get('/items/:id', async (req, res) => {
    try {
        const foundItem = await Item.findOne({_id: req.params.id})
        res.render('items/Show', {item: foundItem})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})







app.listen(PORT, () => {
    console.log(`port working on ${PORT}`)
})
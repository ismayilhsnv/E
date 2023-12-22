
const express = require("express")
const router = express.Router()
const moment = require("moment")
const { v4: uuidv4 } = require('uuid');
const Blogs = require("../models/blogModel");

router.use(express.json())

const blogs = [{
    id: uuidv4(),
    title: 'salam',
    description: 'loremloremlorem',
    createdAt: moment().format('LLL'),
    modifiedAt: moment().format('LLL'),
    author: {
        name: 'blabla',
        surname: 'ahadfaq'
    }
}, {
    id: uuidv4(),
    title: 'salam',
    description: 'loremloremlorem',
    createdAt: moment().format('LLL'),
    modifiedAt: moment().format('LLL'),
    author: {
        name: 'blabla',
        surname: 'ahadfaq'
    }
}]

router.put("/:id", (req, res) => {
    const { id } = req.params
    let target = blogs.find((item) => item.id == id)
    if (target) {
        const indexOfTarget = blogs.indexOf(target)
        target = { ...target, ...req.body, modifiedAt: moment().format('LLL') }
        blogs[indexOfTarget] = { ...target }
        res.send(blogs)
    }
    else {
        res.send('error')
    }
})

router.post("/", (req, res) => {
    const { name, surname } = req.body.author
    console.log(name, surname)

    const newBlog = new Blogs(uuidv4(), req.body.title, req.body.description, moment().format('LLL'), moment().format('LLL'), name, surname)
    console.log(newBlog)
    blogs.push(newBlog)
    res.send("item created")
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    const target = blogs.find((item) => item.id == id)
    if (target) {
        const indexOfTarget = blogs.indexOf(target)
        blogs.splice(indexOfTarget, 1)
        res.send("item")
    }
    else {
        res.send("error")
    }


})
router.get("/", (req, res) => {
    res.send(blogs)
})
router.get("/:id", (req, res) => {
    const { id } = req.params
    const target = blogs.find((item) => item.id == id)
    if (target) {
        res.send(target)
    }
    else {
        res.send('error')
    }
})


module.exports = router
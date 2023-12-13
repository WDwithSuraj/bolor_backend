const router = require('express').Router()
const FormModel = require('../models/formModel')



// to get all data
router.get('/', async (req, res) => {
    try {
        const forms = await FormModel.find()
        res.status(200).send(forms)
    } catch (error) {
        res.status(500).send(error.message)
    }
})



//post new form
router.post('/', async (req, res) => {
    try {
        const form = new FormModel(req.body)
        await form.save()
        res.status(200).send({ msg: 'form created successfully', data: form })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//delete form
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const form = await FormModel.findByIdAndDelete(id)
        res.status(200).send({ msg: 'form deleted successfully', data: form })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//edit form
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const form = await FormModel.findByIdAndUpdate(id, { $set: data }, { new: true });
        res.status(200).send({ msg: 'form updated successfully', data: form })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//to get single form
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const forms = await FormModel.find({ _id: id })
        res.status(200).send(forms)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router
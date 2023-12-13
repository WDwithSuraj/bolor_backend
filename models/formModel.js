const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String },
    questions: { type: {} }
})


const FormModel = mongoose.model('form', formSchema)

module.exports = FormModel;
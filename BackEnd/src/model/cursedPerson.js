const mongoose = require('mongoose')

const CursedPerson = mongoose.model('CursedPerson', {
    name: String,
    age: Number,
    curse: String,
})

module.exports = CursedPerson
const mongoose = require('mongoose');
const tarifasSchema = new mongoose.Schema({
    tiempo: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})
const Tarifas = mongoose.model('Tarifas', tarifasSchema);
module.exports = Tarifas;
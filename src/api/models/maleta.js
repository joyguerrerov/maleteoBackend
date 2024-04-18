const mongoose = require('mongoose');
const maletaSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String, trim: true, required: true
    },
    numero_equipaje: {
        type: Number,
        required: true
    }
})
const Maleta = mongoose.model('Maleta', maletaSchema);
module.exports = Maleta;
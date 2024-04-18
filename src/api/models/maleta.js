const mongoose = require('mongoose');
const maletaSchema = new mongoose.Schema({
    email: {
        type: String, trim: true, required: true
    },
    id: {
        type: String,
        required: true
    },
    N_equipaje: {
        type: Number,
        required: true
    }
})
const Maleta = mongoose.model('Maleta', maletaSchema);
module.exports = Maleta;
const mongoose = require('mongoose');
const reservaSchema = new mongoose.Schema({
    ubicacion: {
        type: Number,
        required: true
    },
    retirada: {
        type: Number,
        required: true
    },
    fecha: {
        type: Number,
        required: true
    },
    deposito: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
})
const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;


const mongoose = require('mongoose');
const guardianSchema = new mongoose.Schema({
    ubicacion: {
        type: String,
        required: true
    },
    fotos: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    horario: {
        type: Number,
        required: true
    },
    tarifa: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    disponibilidad: {
        type: String,
        require: true,
    },
    Usuario: {
        type: String,
        require: true,
    }
})
const Guardian = mongoose.model('Guardian', guardianSchema);
module.exports = Guardian;

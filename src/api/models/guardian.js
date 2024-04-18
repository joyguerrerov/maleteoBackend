const mongoose = require('mongoose');
const guardianSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
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
        type: Date,
        required: true
    },
    tarifa: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: String,
        require: true,
    },
    email: {
        type: String, trim: true,
        required: true
    }
})
const Guardian = mongoose.model('Guardian', guardianSchema);
module.exports = Guardian;

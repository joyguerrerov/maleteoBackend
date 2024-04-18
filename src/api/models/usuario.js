const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String, trim: true,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    contraseña: {
        type: String, trim: true, required: true
    }
})
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
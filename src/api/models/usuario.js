const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({
    email: {
        type: String, trim: true, required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    contraseña: {
        type: String, trim: true, required: true
    },
    fecha_nacimiento: {
        type: Number,
        required: true
    }
})
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
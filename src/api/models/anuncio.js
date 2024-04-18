const mongoose = require('mongoose');
const anuncioSchema = new mongoose.Schema({
    tipo_espacio: {
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
    }
})
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
module.exports = Anuncio;

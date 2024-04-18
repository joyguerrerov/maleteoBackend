const mongoose = require('mongoose');
const ubicacionSchema = new mongoose.Schema({
    ciudad: {
        type: String,
        required: true,
    }
})
const Ubicacion = mongoose.model('Ubicacion', ubicacionSchema);
module.exports = Ubicacion;
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
});
usuarioSchema.pre("save", function (next) {
    if (!validationPassword(this.password)) {
        return next(setError("404", "The password does not meet the requirements"));
    }
    if (!validationEmail(this.email)) {
        return next(setError("404", "The email is not correct"));
    }

    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
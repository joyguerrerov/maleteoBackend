const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../utils/error.util");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const register = async (req, res, next) => {
    try {
        const usuario = new Usuario(req.body);

        const usuarioExist = await Usuario.findOne({ email: usuario.email });
        if (usuarioExist) {
            return next(setError("404", "This email has already been used."));
        }
        const usuarioDB = await usuario.save();
        return res.status(201).json({
            status: 201,
            message: `Usuario ${usuarioDB.email} created`,
        });
    } catch (error) {
        return next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const usuarioInfo = await Usuario.findOne({ email: req.body.email });
        console.log(bcrypt.compareSync(req.body.password, usuarioInfo.password));
        if (bcrypt.compareSync(req.body.password, usuarioInfo.password)) {
            usuarioInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad
            const token = jwt.sign(
                {
                    id: usuarioInfo._id,
                    email: usuarioInfo.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            return res.status(200).json({
                data: { massage: "todo genial", usuario: usuarioInfo, token: token },
            });
        } else {
            return res.json({
                status: 400,
                message: "el password es incorrecto",
                data: null,
            });
        }
    } catch (error) {
        return next(error);
    }
};

const logout = (req, res, next) => {
    try {
        const token = null;
        return res.status(200).json({
            status: 200,
            message: "Logout successful",
        });
    } catch (error) {
        return next(setError(error.statusCode, "Logout Error"));
    }
};

module.exports = { register, login, logout };

const express = require('express')
const usuarioRouter = express.Router();
const { register, login, logout } = require("../controllers/usuario.controller");
const { isAuth } = require("../middleware/auth.middleware");

usuarioRouter.post("/register", register);
usuarioRouter.post("/login", login);
usuarioRouter.post("/logout", [isAuth], logout);

module.exports = usuarioRouter;
